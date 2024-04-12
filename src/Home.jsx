// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the home page!</p>
            {/* Link to the About page */}
            <Link to="/about">Go to About page</Link>
        </div>
    );
};

export default Home;
