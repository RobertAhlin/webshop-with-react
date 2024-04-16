// Layout.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Sidebar /> {/* Add the Sidebar component */}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
