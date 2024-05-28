import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hämta produkter från API vid montering av komponenten
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Välkommen till vår webshop</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
