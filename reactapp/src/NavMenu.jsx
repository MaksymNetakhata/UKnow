import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './NavMenu.css';

const NavMenu = () => {
    const [isAuthorized, setAuthorized] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthorized');
        if (storedAuth) {
            setAuthorized(JSON.parse(storedAuth));
        }
    }, []);

    return (
        <nav className="nav-menu">
            <h4><Link to="/" className="navbar-brand">uKnow</Link></h4>
            <ul>
                <li><Link to="/" className="nav-button">Головна</Link></li>
                <li><Link to="/Quiz" className="nav-button">Тести</Link></li>
                {isAuthorized ? (
                    <li><Link to="/User" className="nav-button">Профіль</Link></li>
                ) : (
                    <li><Link to="/Profile" className="nav-button">Профіль</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default NavMenu;
