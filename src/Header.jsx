// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">Your Logo Here</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
