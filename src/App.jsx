import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AddToCartButton from './components/AddToCartButton';
import RemoveFromCartButton from './components/RemoveFromCartButton';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedItems) {
            setCartItems(storedItems);
        }
    }, []);

    const handleAddToCart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);
        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].count += 1;
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            const updatedCartItems = [...cartItems, { ...product, count: 1 }];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };

    const handleRemoveFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <Router>
            <div className="layout">
                <Header />
                <Sidebar cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
