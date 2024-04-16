// Products.jsx

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../Api';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all products when the component mounts
        fetchProducts()
            .then(products => {
                // Set the products state with the fetched products
                setProducts(products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    // Check if there's an error
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Check if products are still being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Featured Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
