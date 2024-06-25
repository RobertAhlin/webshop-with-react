import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Address.css';

const Address = ({ onFormValidation }) => {
    const [address, setAddress] = useState(''); // State for address
    const [name, setName] = useState(''); // State for name
    const [email, setEmail] = useState(''); // State for email

    useEffect(() => {
        // Function to validate form fields and check if they are not empty and email is valid
        const isValid = address.trim() !== '' && name.trim() !== '' && email.trim() !== '' && validateEmail(email);
        onFormValidation(isValid, address);
    }, [address, name, email, onFormValidation]);

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

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
                Email:
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
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
    onFormValidation: PropTypes.func.isRequired
};

export default Address;
