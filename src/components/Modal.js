import React from 'react';

const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.modalBackground}>
            <div style={styles.modalContent}>
                <img src={product.image} style={styles.modalImage} />
                <div style={styles.productDetails}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
                <button onClick={onClose} style={styles.closeButton}>Close</button>
            </div>
        </div>
    );
};

const styles = {
    modalBackground: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '50%', 
        padding: '10px', 
        borderRadius: '8px',
        position: 'relative',
    },
    modalImage: {
        width: 'auto', 
        height: '10rem',
        display: 'block',
        margin: '0 auto',
    },
    productDetails: {
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '5px 10px',
        backgroundColor: 'red',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default Modal;
