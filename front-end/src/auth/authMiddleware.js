import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthMiddleware = () => {
    const [showLogin, setShowLogin] = useState(true);

    const switchToRegister = () => setShowLogin(false);
    const switchToLogin = () => setShowLogin(true);

    return (
        <div>
            {showLogin ? 
                <Login switchToRegister={switchToRegister} /> : 
                <Register switchToLogin={switchToLogin} />
            }
        </div>
    );
};

export default AuthMiddleware;
