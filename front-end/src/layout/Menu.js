import React, { useState } from "react";

import { Link } from "react-router-dom";
import ParentComponent from '../auth/ParentComponent';

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (id) => {
    setIsLoggedIn(true);
    setEmployeeId(id);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div className="sidebar-brand-text">
            <span>EngineerPattersons Reservation App</span>
          </div>
        </Link>
        <hr />
        <ul className="nav navbar-nav">
          {!isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={() => setShowLogin(true)}>
                <span className="oi oi-account-login" />
                &nbsp; Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <span className="nav-link text-success">
                Employee ID: {employeeId}
              </span>
            </li>
          )}
          {showLogin && <ParentComponent handleLogin={handleLogin} />}
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <span className="oi oi-dashboard" />
              &nbsp; Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              <span className="oi oi-magnifying-glass" />
              &nbsp; Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservations/new">
              <span className="oi oi-plus" />
              &nbsp; New Reservation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tables/new">
              <span className="oi oi-layers" />
              &nbsp; New Table
            </Link>
          </li>
        </ul>
        <div className="text-center">
          <button className="btn rounded-circle border-0" type="button" />
        </div>
      </div>
    </nav>
  );
}

export default Menu;
