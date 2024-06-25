import React from 'react';

// Define a functional component called AddToCartButton
const AddToCartButton = ({ product, addToCart }) => {
    // Define a function called handleClick that will be called when the button is clicked
    const handleClick = () => {
        // Call the addToCart function and pass in the product as an argument
        addToCart(product);
    };

    // Render a button element with an onClick event handler that calls the handleClick function
    return (
        <button onClick={handleClick}>Add to cart</button>
    );
};

// Export the AddToCartButton component as the default export
export default AddToCartButton;
