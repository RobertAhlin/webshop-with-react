import React from 'react';

const OrderSummary = ({ order }) => {
  const { items, total } = order;

  return (
    <div>
      <h3>Orderöversikt</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}: {item.quantity} st
          </li>
        ))}
      </ul>
      <p>Totalt: {total} kr</p>
    </div>
  );
}

export default OrderSummary;
