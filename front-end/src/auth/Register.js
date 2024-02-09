import React, { useState } from 'react';
import axios from 'axios';
import "./authStyle.css";


const Register = ({ show, handleClose, switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false
    });

    if (!show) return null;

    const validatePassword = (password) => {
        setPasswordValidations({
            minLength: password.length >= 6,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            specialChar: /[!-.]/.test(password)
        });
    };

    const updatePassword = (password) => {
        setPassword(password);
        validatePassword(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
        alert("All fields are required.");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!Object.values(passwordValidations).every(Boolean)) {
        alert("Password does not meet the required criteria.");
        return;
    }

        try {
            const response = await axios.post('https://reservationapi.engineerpatterson.com/register', { username, email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content register-container">
                <span className="close" onClick={handleClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => updatePassword(e.target.value)} placeholder="Password" />
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    <button type="submit">Register</button>
                </form>
                 <p> Already have an account?
                   <span className="login-link" onClick={switchToLogin}> Login</span>
             </p>
                    <div className="password-requirements">
                    <p style={{ color: passwordValidations.minLength ? 'black' : 'grey' }}>
                        {passwordValidations.minLength ? '✔ ' : ''} Minimum 6 characters
                    </p>
                    <p style={{ color: passwordValidations.uppercase ? 'black' : 'grey' }}>
                        {passwordValidations.uppercase ? '✔ ' : ''} At least one uppercase letter
                    </p>
                    <p style={{ color: passwordValidations.lowercase ? 'black' : 'grey' }}>
                        {passwordValidations.lowercase ? '✔ ' : ''} At least one lowercase letter
                    </p>
                    <p style={{ color: passwordValidations.number ? 'black' : 'grey' }}>
                        {passwordValidations.number ? '✔ ' : ''} At least one number
                    </p>
                    <p style={{ color: passwordValidations.specialChar ? 'black' : 'grey' }}>
                        {passwordValidations.specialChar ? '✔ ' : ''} At least one special character (!, -, ., etc.)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;


/*.  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^. */

/* import React, { useState } from 'react';
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
*/


