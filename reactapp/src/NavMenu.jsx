import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    };

    render() {
        const { collapsed } = this.state;
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="brand">
                    <span>uKnow</span>
                    </div>
                    <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <button className="nav-button" onClick={() => window.location.href = "/"}>ГОЛОВНА
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-button" onClick={() => window.location.href = "/Quiz"}>ТЕСТИ
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-button"
                                        onClick={() => window.location.href = "/Profile"}>ПРОФІЛЬ
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}


export default NavMenu;