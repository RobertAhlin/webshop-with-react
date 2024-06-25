import React from 'react';
import './ProductDetailModal.css';

// ProductDetailModal component
const ProductDetailModal = ({ isOpen, onClose, product, addToCart }) => {
    // If the modal is not open, return null
    if (!isOpen) return null;

    // Function to handle adding the product to the cart
    const handleAddToCart = () => {
        addToCart(product);
    };

    // Render the modal
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>Close</button>
                {product && (
                    <div>
                        {/* Display the product image */}
                        <img src={`https://dummyjson.com/image/150/CCCCCC?text=${product.title}!&fontSize=10`} alt={product.title} className="modal-product-image" />
                        {/* Display the product title */}
                        <h2>{product.title}</h2>
                        {/* Display the product price */}
                        <p>USD {product.price}</p>
                        {/* Display the product description */}
                        <p>{product.description}</p>
                        {/* Button to add the product to the cart */}
                        <button onClick={handleAddToCart}>Add to cart</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailModal;
