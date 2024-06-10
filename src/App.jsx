// src/App.jsx
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
        const storedItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedItems) {
            setCartItems(storedItems);
        }
    }, []);

    const addToCart = (product) => {
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

    const removeFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const adjustQuantity = (index, amount) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].count += amount;
        if (updatedCartItems[index].count <= 0) {
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
                <Sidebar cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
            )}
            <main>
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/about" element={<About />} />
                    {/* Pass setCartItems as a prop to the Checkout component */}
                    <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const AppWrapper = () => (
    <Router basename='/webshop-with-react'>
        <App />
    </Router>
);

export default AppWrapper;
