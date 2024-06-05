// src/components/ConfirmModal.jsx

import PropTypes from 'prop-types';
import './ConfirmModal.css';

const ConfirmModal = ({ onClose, onConfirm }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Confirm Your Order</h2>
                <p>Are you sure you want to place this order?</p>
                <button className="modal-button cancel-button" onClick={onClose}>Cancel</button>
                <button className="modal-button confirm-button" onClick={onConfirm}>Yes</button>
            </div>
        </div>
    );
};

ConfirmModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default ConfirmModal;
