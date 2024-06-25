import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/Api';
import Modal from './ProductDetailModal';
import './Products.css';
import './ProductDetailModal.css';

const Products = ({ addToCart }) => {
    // State variables
    const [products, setProducts] = useState([]); // Array of products
    const [error, setError] = useState(null); // Error object if there's an error fetching products
    const [loading, setLoading] = useState(true); // Loading state while fetching products
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for modal
    const [displayedProducts, setDisplayedProducts] = useState(18); // Number of products initially displayed
    const productsPerPage = 18; // Number of products to load per page

    useEffect(() => {
        // Fetch products when component mounts
        fetchProducts()
            .then(products => {
                setProducts(products); // Set fetched products
                setLoading(false); // Set loading state to false
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error); // Set error state if there's an error fetching products
                setLoading(false); // Set loading state to false
            });
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product); // Set selected product for modal
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
        setSelectedProduct(null); // Reset selected product
    };

    const handleShowMore = () => {
        setDisplayedProducts(prevDisplayed => prevDisplayed + productsPerPage); // Increase number of displayed products
    };

    if (error) {
        return <div>Error: {error.message}</div>; // Display error message if there's an error fetching products
    }

    if (loading) {
        return <div>Loading...</div>; // Display loading state while fetching products
    }

    return (
        <div>
            <ul className='product-list'>
                {products.slice(0, displayedProducts).map(product => (
                    <li key={product.id} className='product-container' onClick={() => openModal(product)}>
                        <div>
                            <img src={`https://dummyjson.com/image/150/CCCCCC?text=${product.title}!&fontSize=10`} alt={product.title} className="product-image" />
                            <div>{product.title}</div>
                            <div>USD {product.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="show-more-container">
                {displayedProducts < products.length && (
                    <button className="show-more-button" onClick={handleShowMore}>Show more...</button>
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} addToCart={addToCart} />
        </div>
    );
};

export default Products;
