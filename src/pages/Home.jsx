import React from 'react';
import Products from '../components/Products';

const Home = ({ addToCart }) => {
    return (
        <div>
            <Products addToCart={addToCart} />
        </div>
    );
};

export default Home;
