import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

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
        const {collapsed} = this.state;
        return (
            <div> 
                <Navbar className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <NavbarBrand href="/" className="navbar-brand">uKnow</NavbarBrand>
                        <Collapse isOpen={!collapsed} navbar>
                            <ul className="navbar-nav">
                                <NavItem className="nav-item">
                                    <NavLink href="/" className="nav-button">Головна</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink href="/Quiz" className="nav-button">Тести</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink href="/Profile" className="nav-button">Профіль</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}


export default NavMenu;