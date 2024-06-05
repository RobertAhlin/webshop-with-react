// src/components/OrderSummary.jsx
import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ cartItems }) => {
    // Calculate total sum of prices
    const totalSum = cartItems.reduce((total, item) => total + (item.price * item.count), 0);

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className="order-item">
                        <div className="order-item-details">
                            <div className="order-item-title">{item.count} x {item.title}</div>
                            <div className="order-item-price">USD {(item.price * item.count).toFixed(2)}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="total-sum">
                <strong>Total: USD {totalSum.toFixed(2)}</strong>
                
            </div>
        </div>
    );
};

export default OrderSummary;
