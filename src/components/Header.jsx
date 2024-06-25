// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// Header component
const Header = () => {
    return (
        <div className="header">
            <header className="center">
                <div className="logo">All & All Webshop</div>
                <nav>
                    <ul className="nav-links">
                        <li><NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink></li>
                        <li><NavLink to="/checkout" className="nav-link" activeclassname="active">Checkout</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
