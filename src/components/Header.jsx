// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="center">
            <div className="logo">All & All Webshop</div>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/checkout" className="nav-link" activeClassName="active">Checkout</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
