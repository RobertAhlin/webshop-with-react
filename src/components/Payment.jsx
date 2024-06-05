// src/components/Payment.jsx

import { useState, useEffect } from 'react';
import './Payment.css';

const Payment = ({ onFormValidation }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    useEffect(() => {
        const isValid = cardNumber.trim() !== '' && expiryDate.trim() !== '';
        onFormValidation(isValid);
    }, [cardNumber, expiryDate, onFormValidation]);

    return (
        <div className="payment-form">
            <h3>Payment Details</h3>
            <label>
                Card Number:
                <input 
                    type="text" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                />
            </label>
            <label>
                Expiry Date:
                <input 
                    type="text" 
                    value={expiryDate} 
                    onChange={(e) => setExpiryDate(e.target.value)} 
                />
            </label>
        </div>
    );
};

export default Payment;
