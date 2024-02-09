/* import React, { useState } from 'react';
import axios from 'axios';
import "./authStyle.css";

const Login = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reservationapi.engineerpatterson/login', { email, password });
             console.log(response.data); // Handle the response accordingly
        } catch (error) {
            console.error(error); // Handle errors
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
              </form>
          <p>
              Don't have an account? 
               <span className="register-link" onClick={switchToRegister}> Register</span>
                </p>
            </div>
        </div>
    );
};

export default Login; */
 

import React, { useState } from 'react';
import axios from 'axios';
import "./authStyle.css";


const Login = ({ show, handleClose, switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
        alert("Both email and password are required.");
        return;
    }
    if (!show) return null;
        
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
        try {
            const response = await axios.post('https://reservationapi.engineerpatterson.com/login', { email, password });
            console.log(response.data); // Handle the response accordingly
        } catch (error) {
            console.error(error); // Handle errors
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? 
                    <span className="register-link" onClick={switchToRegister}> Register</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
