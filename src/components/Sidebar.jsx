import React from 'react';
import './Sidebar.css';
import ShoppingCart from './ShoppingCart';

// Sidebar component
const Sidebar = ({ cartItems, removeFromCart, adjustQuantity }) => {
    return (
        <div className="sidebar">
            {/* Render the ShoppingCart component and pass necessary props */}
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
        </div>
    );
};

export default Sidebar;
