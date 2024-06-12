// src/pages/Checkout.jsx

import React, { useState, useRef, useEffect } from 'react';
import OrderSummary from '../components/OrderSummary';
import Address from '../components/Address';
import Payment from '../components/Payment';
import ConfirmModal from '../components/ConfirmModal';
import Confirmation from '../components/Confirmation';
import './Checkout.css';

const Checkout = ({ cartItems, setCartItems }) => {
    const [showForms, setShowForms] = useState(false);
    const [isOrderNowActive, setIsOrderNowActive] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [shippingAddress, setShippingAddress] = useState('');
    const purchaseButtonRef = useRef(null);

    useEffect(() => {
        if (showForms) {
            window.scrollTo({
                top: purchaseButtonRef.current.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    }, [showForms]);

    const handlePurchaseClick = () => {
        setShowForms(true);
    };

    const handleOrderNowClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleOrderConfirm = () => {
        setIsModalVisible(false);
        setCartItems([]); // Clear cart items state
        localStorage.removeItem('cartItems'); // Clear local storage
        setShowConfirmation(true);
    };

    const handleFormValidation = (isValid, address) => {
        setIsOrderNowActive(isValid);
        setShippingAddress(address);
    };

    if (showConfirmation) {
        return <Confirmation setCartItems={setCartItems} />;
    }

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
                    <Address onFormValidation={handleFormValidation} />
                    <Payment onFormValidation={handleFormValidation} />
                </div>
            )}
            {showForms && (
                <button 
                    className={`order-now-button ${isOrderNowActive ? 'active' : ''}`}
                    onClick={handleOrderNowClick}
                    disabled={!isOrderNowActive}
                >
                    Order Now
                </button>
            )}
            {isModalVisible && (
                <ConfirmModal 
                    onClose={handleModalClose} 
                    onConfirm={handleOrderConfirm}
                />
            )}
        </div>
    );
};

export default Checkout;
