import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

class Header extends Component {
    render() {
        return (
            <div className="menu">
                <MenuItem to={'/'}>Home</MenuItem>
                <MenuItem to={'/about'}>About</MenuItem>
                <MenuItem to={'/work'}>Work</MenuItem>
                <MenuItem to={'/contact'}>Contact</MenuItem>
            </div>
        );
    }
}

export default Header;


