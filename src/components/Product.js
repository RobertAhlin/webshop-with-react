import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <li>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Pris: {product.price}</p>
      </Link>
    </li>
  );
}

export default Product;
