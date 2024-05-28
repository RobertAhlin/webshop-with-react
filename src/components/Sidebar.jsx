// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import ShoppingCart from './ShoppingCart';

const Sidebar = ({ cartItems, removeFromCart }) => {
    return (
        <div className="sidebar">
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
};

export default Sidebar;
