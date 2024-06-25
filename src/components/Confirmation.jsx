// src/components/Confirmation.jsx

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = ({ setCartItems }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        setCartItems([]); // Clear cart items state
        localStorage.removeItem('cartItems'); // Clear local storage
    }, [setCartItems]);

    return (
        <div className="confirmation-message">
            <h2>Thank you for your order!</h2>
            <p>We are now working as fast as we can to deliver it!</p>
            <NavLink to="/" className="nav-link">
                <button className="ok-button">Ok!</button>
            </NavLink>
        </div>
    );
};

export default Confirmation;
