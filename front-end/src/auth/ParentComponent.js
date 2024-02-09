import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const ParentComponent = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const switchToLogin = () => setShowLogin(true);
    const switchToRegister = () => setShowRegister(true);

    const handleLoginClose = () => setShowLogin(false);
    const handleRegisterClose = () => setShowRegister(false);

    return (
        <div>
            {showLogin && <Login handleClose={handleLoginClose} switchToRegister={switchToRegister} />}
            {showRegister && <Register handleClose={handleRegisterClose} switchToLogin={switchToLogin} />}
        </div>
    );
};

export default ParentComponent;
