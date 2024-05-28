// src/components/Products.jsx

import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/Api';
import Modal from './Modal';
import './Products.css';
import './Modal.css';

const Products = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts()
            .then(products => {
                setProducts(products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className='header'>Featured Products</h2>
            <ul className='product-list'>
                {products.map(product => (
                    <li key={product.id} className='product-container' onClick={() => openModal(product)}>
                        <div>
                            <img src={`https://dummyjson.com/image/150/CCCCCC?text=${product.title}!&fontSize=10`} alt={product.title} className="product-image" />
                            <div>{product.title}</div>
                            <div>USD {product.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} addToCart={addToCart} />
        </div>
    );
};

export default Products;
