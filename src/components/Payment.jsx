// import React from 'react';
import './Payment.css';

// const Payment = () => {
//    return (
//       <div className="payment-form">
//            <h3>Payment Details</h3>
//            <form>
//                 <div className="form-group">
//                     <label htmlFor="cardNumber">Card Number:</label>
//                     <input type="text" id="cardNumber" name="cardNumber" required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="expiryDate">Expiry Date:</label>
//                     <input type="text" id="expiryDate" name="expiryDate" required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="cvv">CVV:</label>
//                     <input type="text" id="cvv" name="cvv" required />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Payment;
import React, { useState, useEffect } from 'react';

const Payment = ({ onFormValidation }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = cardNumber !== '' && expiryDate !== '';
        setIsFormValid(isValid);
        onFormValidation(isValid);
    }, [cardNumber, expiryDate, onFormValidation]);

    return (
        <div className="payment-form">
            <h3>Payment Details</h3>
            <label>
                Card Number:
                <input 
                    type="text" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                />
            </label>
            <label>
                Expiry Date:
                <input 
                    type="text" 
                    value={expiryDate} 
                    onChange={(e) => setExpiryDate(e.target.value)} 
                />
            </label>
        </div>
    );
};

export default Payment;
