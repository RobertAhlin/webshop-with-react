import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="center"> {/* Add center class */}
            <div className="logo">Header</div>
            <nav>
                <ul className="nav-links"> {/* Add nav-links class */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
