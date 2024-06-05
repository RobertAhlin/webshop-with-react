import React from 'react';

const Confirmation = ({ shippingAddress }) => {
    return (
        <div className="confirmation-message">
            <h2>Thank you for your order!</h2>
            <p>We are now working as fast as we can to deliver it to:</p>
            <p>{shippingAddress}</p>
        </div>
    );
};

export default Confirmation;
