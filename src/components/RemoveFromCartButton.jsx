import React from 'react';

const RemoveFromCartButton = ({ index, removeFromCart }) => {
    const handleClick = () => {
        removeFromCart(index);
    };

    return (
        <button onClick={handleClick}>Remove from cart</button>
    );
};

export default RemoveFromCartButton;
