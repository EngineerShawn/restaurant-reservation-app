import React from 'react';
import { Link } from 'react-router-dom';

const AuthButtons = () => {
    const buttonStyle = {
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: 'white'
    };

    return (
        <div>
            <Link to="/login" style={{ ...buttonStyle, backgroundColor: '#4CAF50', border: '2px solid #4CAF50' }}>Login</Link>
            <Link to="/register" style={{ ...buttonStyle, backgroundColor: '#008CBA', border: '2px solid #008CBA' }}>Register</Link>
        </div>
    );
};

export default AuthButtons;￼Enter
