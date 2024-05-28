// src/components/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, product, addToCart }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>Close</button>
                {product && (
                    <div>
                        <img src={`https://dummyjson.com/image/150/CCCCCC?text=${product.title}!&fontSize=10`} alt={product.title} className="modal-product-image" />
                        <h2>{product.title}</h2>
                        <p>USD {product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => { addToCart(product); onClose(); }}>Add to cart</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
