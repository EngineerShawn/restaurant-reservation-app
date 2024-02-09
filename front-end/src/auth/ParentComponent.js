import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const ParentComponent = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const switchToLogin = () => setShowComponent('login');
    const switchToRegister = () => setShowComponent('register');

    const handleLoginClose = () => setShowLogin(false);
    const handleRegisterClose = () => setShowRegister(false);

    return (
        <div>
            {showComponent === 'login' && <Login handleClose={handleClose} switchToRegister={switchToRegister} />}
            {showComponent === 'register' && <Register handleClose={handleClose} switchToLogin={switchToLogin} />}
        </div>
    );
};

export default ParentComponent;
