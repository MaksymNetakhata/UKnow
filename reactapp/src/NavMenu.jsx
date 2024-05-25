import React, { Component } from 'react';
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
                    <span className="navbar-brand">uKnow</span>
                    <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <button className="nav-button" onClick={() => window.location.href = "/"}>Головна
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-button" onClick={() => window.location.href = "/Quiz"}>Тести
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-button"
                                        onClick={() => window.location.href = "/Profile"}>Профіль
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