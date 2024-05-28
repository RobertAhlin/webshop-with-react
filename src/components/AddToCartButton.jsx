import React from 'react';

const AddToCartButton = ({ product, addToCart }) => {
    const handleClick = () => {
        addToCart(product);
    };

    return (
        <button onClick={handleClick}>Add to cart</button>
    );
};

export default AddToCartButton;
