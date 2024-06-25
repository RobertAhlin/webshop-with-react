import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage when the component mounts
        const storedItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedItems) {
            setCartItems(storedItems);
        }
    }, []);

    const addToCart = (product) => {
        const itemIndex = cartItems.findIndex((item) => item.id === product.id);
        if (itemIndex !== -1) {
            // If the product is already in the cart, increase its count
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].count += 1;
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            // If the product is not in the cart, add it with a count of 1
            const updatedCartItems = [...cartItems, { ...product, count: 1 }];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };

    const removeFromCart = (index) => {
        // Remove an item from the cart based on its index
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const adjustQuantity = (index, amount) => {
        // Adjust the quantity of an item in the cart based on its index and the amount to adjust
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].count += amount;
        if (updatedCartItems[index].count <= 0) {
            // If the quantity becomes zero or negative, remove the item from the cart
            removeFromCart(index);
        } else {
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };

    const location = useLocation();

    return (
        <div className="layout">
            <Header />
            {location.pathname !== '/checkout' && location.pathname !== '/about' && (
                // Show the sidebar component on all pages except checkout and about
                <Sidebar cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
            )}
            <main>
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const AppWrapper = () => (
    <Router basename='/'>
        <App />
    </Router>
);

export default AppWrapper;
