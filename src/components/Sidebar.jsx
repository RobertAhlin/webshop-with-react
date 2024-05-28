import React from 'react';
import './Sidebar.css';
import ShoppingCart from './ShoppingCart';

const Sidebar = ({ cartItems, removeFromCart, adjustQuantity }) => {
    return (
        <div className="sidebar">
            <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
        </div>
    );
};

export default Sidebar;
