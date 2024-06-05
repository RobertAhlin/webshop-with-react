// src/pages/Checkout.jsx
import React, { useState, useRef, useEffect } from 'react';
import OrderSummary from '../components/OrderSummary';
import Address from '../components/Address';
import Payment from '../components/Payment';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
    const [showForms, setShowForms] = useState(false);
    const purchaseButtonRef = useRef(null);

    useEffect(() => {
        if (showForms) {
            // Scroll to the purchase button with offset
            window.scrollTo({
                top: purchaseButtonRef.current.offsetTop - 20, // Adjust the offset as needed
                behavior: 'smooth'
            });
        }
    }, [showForms]);

    const handlePurchaseClick = () => {
        setShowForms(true);
    };

    return (
        <div className="checkout-page">
            <OrderSummary cartItems={cartItems} />
            <button 
                ref={purchaseButtonRef} 
                className="purchase-button" 
                onClick={handlePurchaseClick}
            >
                Purchase
            </button>
            {showForms && (
                <div className="forms-container">
                    <Address />
                    <Payment />
                </div>
            )}
        </div>
    );
};

export default Checkout;
