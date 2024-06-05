//src/components/Address.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Address.css';

const Address = ({ onFormValidation }) => {
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = address !== '' && name !== '';
        setIsFormValid(isValid);
        onFormValidation(isValid, address);
    }, [address, name, onFormValidation]);

    return (
        <div className="address-form">
            <h3>Shipping Address</h3>
            <label>
                Name:
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </label>
            <label>
                Address:
                <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                />
            </label>
        </div>
    );
};

Address.propTypes = {
    onFormValidation: PropTypes.func.isRequired // Ensure onFormValidation is a function and required
};

export default Address;
