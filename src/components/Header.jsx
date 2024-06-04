// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="center">
            <div className="logo">Header</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
