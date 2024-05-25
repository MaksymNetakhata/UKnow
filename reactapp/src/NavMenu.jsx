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
                    <span className="navbar-brand">uKnow</span>
                    <button className="navbar-toggler" type="button" onClick={this.toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Головна</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Quiz">Тести</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Profile">Профіль</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavMenu;