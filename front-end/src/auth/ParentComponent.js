import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const ParentComponent = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClose = () => setShowLogin(false);
    const handleRegisterClose = () => setShowRegister(false);

    return (
        <div>
            {showLogin && <Login handleClose={handleLoginClose} />}
            {showRegister && <Register handleClose={handleRegisterClose} />}
        </div>
    );
};

export default ParentComponent;
