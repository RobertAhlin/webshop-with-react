// src/components/Confirmation.jsx

import { NavLink } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
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
