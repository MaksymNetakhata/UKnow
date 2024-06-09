import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './NavMenu.css';
import { login } from "./services/login.jsx";

const NavMenu = () => {
    const [isAuthorized, setAuthorized] = useState(false);

    const handleLogin = async() => {
        const response = await login();
        window.location.href = response;
        setAuthorized(true);
    };


    return (
        <nav className="nav-menu">
            <h4><Link to="/" className="navbar-brand">uKnow</Link></h4>
            <ul>
                <li><Link to="/" className="nav-button">Головна</Link></li>
                <li><Link to="/Quiz" className="nav-button">Тести</Link></li>
                <li><Link to="/Profile" className="nav-button">Профіль</Link></li>
            </ul>
        </nav>
    );
}

export default NavMenu;
