import React from 'react';
import './Payment.css';

const Payment = () => {
    return (
        <div className="payment-form">
            <h3>Payment Details</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" name="cardNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" name="expiryDate" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" required />
                </div>
            </form>
        </div>
    );
};

export default Payment;
