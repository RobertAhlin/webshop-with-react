// src/components/ShoppingCart.jsx
import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.title} - USD {item.price}
                        <button onClick={() => removeFromCart(index)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
