// src/components/ShoppingCart.jsx

import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                        <div className="cart-item-details">
                            <div className="cart-item-title">{item.count} x {item.title}</div>
                            <div className="cart-item-price">USD {item.price}</div>
                        </div>
                        <button className="remove-button" onClick={() => removeFromCart(index)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
