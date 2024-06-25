import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

// ShoppingCart component
const ShoppingCart = ({ cartItems, removeFromCart, adjustQuantity }) => {
    // Calculate total sum of prices
    const totalSum = cartItems.reduce((total, item) => total + (item.price * item.count), 0);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <p>Total: USD {totalSum.toFixed(2)}</p>
            <Link to="/checkout" className="checkout-button">Checkout</Link>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                        <div className="cart-item-details">
                            <div className="cart-item-title">{item.count} x {item.title}</div>
                            <div className="cart-item-price">USD {(item.price * item.count).toFixed(2)}</div>
                        </div>
                        <div className="quantity-controls">
                            <button className="plus-quantity-button" onClick={() => adjustQuantity(index, 1)}>+</button>
                            <button className="minus-quantity-button" onClick={() => adjustQuantity(index, -1)}>-</button>
                            <button className="remove-button" onClick={() => removeFromCart(index)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
