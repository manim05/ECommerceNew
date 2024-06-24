import React,{useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ product }) => {


  
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartItem = cartItems.find(item => item.productId === product.id);
  const selectedCount = cartItem ? cartItem.quantity : 0;





  const handleIncrement = useCallback(() => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, product } });
  }, [dispatch, product]);


  const handleAddToCart = useCallback(() => {
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, product } });
  },[dispatch,product]);

  const handleDecrement = useCallback(() => {
    if (selectedCount > 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
    } 
  },[dispatch,product.id,selectedCount]);

  return (
    <div style={styles.productBox}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.description}>{product.description}</p>
      <p>Price: ${product.price}</p>

      {!!selectedCount ? (
        <div>
          <button style={styles.operatorButton} onClick={handleDecrement}> - </button>
          <span>{selectedCount}</span>
          <button style={styles.operatorButton} onClick={handleIncrement}> + </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} style={styles.cartButton}> Add to Cart </button>
      )}
    </div>
  );
};



const styles = {
  productBox: {
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    backgroundColor: '#fff',
  },
  title: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 3,
    height: '4.2em',
  },
  description: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 3,
    height: '4.2em',
  },
  cartButton: {
    padding: '10px',
    marginRight: '10px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '50%',
  },
  operatorButton: {
    padding: '5px',
    marginRight: '5px',
    fontSize: '20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '20%',
  },
};

export default Product;



