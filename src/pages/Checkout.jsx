// src/pages/Checkout.jsx
import React from 'react';
import OrderSummary from '../components/OrderSummary';

const Checkout = ({ cartItems }) => {
    return (
        <div className="checkout-page">
            <OrderSummary cartItems={cartItems} />
        </div>
    );
};

export default Checkout;
