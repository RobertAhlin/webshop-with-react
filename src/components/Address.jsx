import React from 'react';
import './Address.css';

const Address = () => {
    return (
        <div className="address-form">
            <h3>Shipping Address</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" required />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">ZIP Code:</label>
                    <input type="text" id="zip" name="zip" required />
                </div>
            </form>
        </div>
    );
};

export default Address;
