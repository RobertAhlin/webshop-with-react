import { useState, useEffect } from 'react';
import './Payment.css';

// Payment component
const Payment = ({ onFormValidation }) => {
    // State for card number and expiry date
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    // Run validation when card number or expiry date changes
    useEffect(() => {
        // Check if card number and expiry date are not empty
        const isValid = cardNumber.trim() !== '' && expiryDate.trim() !== '';
        // Call the onFormValidation function with the validation result
        onFormValidation(isValid);
    }, [cardNumber, expiryDate, onFormValidation]);

    // Render the payment form
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
