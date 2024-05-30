import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Collapse, Navbar, NavbarBrand, NavItem} from 'reactstrap';
import './NavMenu.css';


class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }


    render() {
        const {collapsed} = this.state;
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
        {/*} <div>
            <div className="navbar ">
                <div className="container">
                    <Link to="/" className="navbar-brand">uKnow</Link>
                    <ul className="navbar-nav">
                        <NavItem className="nav-item">
                            <Link to="/" className="nav-button">Головна</Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link to="/Quiz" className="nav-button">Тести</Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link to="/Profile" className="nav-button">Профіль</Link>
                        </NavItem>
                    </ul>
                    </div>
                </div>
            </div>
        );*/
        }
    }
}


export default NavMenu;