/* import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reservationapi.engineerpatterson.com/register', { username, email, password });
            console.log(response.data); // Handle the response accordingly
        } catch (error) {
            console.error(error); // Handle errors
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
*/

import React, { useState } from 'react';
import axios from 'axios';
import "./authStyle.css";

const Register = ({ switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-.])[A-Za-z\d!-.]{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if(!validatePassword(password)) {
            alert("Password must be at least 6 characters and contain 1 uppercase, 1 lowercase, 1 number, and 1 special character (!, -, ., etc.)");
            return;
        }
        try {
            const response = await axios.post('https://reservationapi.engineerpatterson.com/register', { username, email, password });
            console.log(response.data); // Handle the response accordingly
        } catch (error) {
            console.error(error); // Handle errors
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    <button type="submit">Register</button>
                </form>
             <p> Already have an account?
                 <span className="login-link" onClick={switchToLogin}> Login</span>
             </p>
            </div>
        </div>
    );
};

export default Register;
