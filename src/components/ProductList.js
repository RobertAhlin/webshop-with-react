import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Produkter</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
