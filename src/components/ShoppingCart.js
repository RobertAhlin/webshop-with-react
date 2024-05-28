import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <h2>Kundvagn</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity} st
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
