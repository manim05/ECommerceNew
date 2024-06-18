// import React, { useState, useEffect } from 'react';


// const Product = ({ product, updateCart,cartReset  }) => {
//     const [selectedCount, setSelectedCount] = useState(0);

//     useEffect(() => {
//         const savedCart = localStorage.getItem('cart');
//         if (savedCart) {
//             const cartItems = JSON.parse(savedCart);
//             const cartItem = cartItems.find(item => item.productId === product.id);
//             if (cartItem) {
//                 setSelectedCount(cartItem.quantity);
//             }
//         }
//     }, [product.id]);

//     const handleAddToCart = () => {
//         setSelectedCount(1);
//         updateCart(product.id, 'add');
//     };

//     const handleIncrement = () => {
//         setSelectedCount(selectedCount + 1);
//         updateCart(product.id, 'add');
//     };

//     const handleDecrement = () => {
//         const newCount = selectedCount === 1 ? 0 : selectedCount - 1;
//         setSelectedCount(newCount);
//         updateCart(product.id, 'remove');
//     };

//     useEffect(() => {
//         if (cartReset) {
//             setSelectedCount(0);
//         }
//     }, [cartReset]);

//     return (
//         <div style={styles.productBox}>
//             <img src={product.image} alt={product.title} style={styles.image} />
//             <h3 style={styles.title}>{product.title}</h3>
//             <p style={styles.description}>{product.description}</p>
//             <p>Price: ${product.price}</p>

//             {!selectedCount  ? (
//                 <button onClick={handleAddToCart} style={styles.cartButton}>Add to Cart</button>
//             ) : (
//                 <div>
//                     <button style={styles.operatorButton} onClick={handleDecrement}>-</button>
//                     <span>{selectedCount}</span>
//                     <button style={styles.operatorButton} onClick={handleIncrement}>+</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// const styles = {
//     productBox: {
//         position: 'relative', 
//         overflow: 'hidden', 
//         border: '1px solid #ddd',
//         borderRadius: '5px',
//         padding: '16px',
//         margin: '16px',
//         maxWidth: '300px',
//         textAlign: 'center',
//     },
//     image: {
//         width: '100%',
//         height: '200px', 
//         objectFit: 'contain', 
//         backgroundColor: '#fff', 
//     },
//     title : {
//         display: '-webkit-box',
//         WebkitBoxOrient: 'vertical',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         WebkitLineClamp: 3, 
//         height: '4.2em', 
//     },
//     description : {
//         display: '-webkit-box',
//         WebkitBoxOrient: 'vertical',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         WebkitLineClamp: 3, 
//         height: '4.2em', 
//     }, 
//     clickableArea: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         cursor: 'pointer',
//     },
//     cartButton: {
//         padding: '10px',
//         marginRight: '10px',
//         fontSize: '16px',
//         backgroundColor: 'blue',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         width : '50%'
//     },
//     operatorButton: {
//         padding: '5px',
//         marginRight: '5px',
//         fontSize: '20px',
//         backgroundColor: 'blue',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         width : '20%'
//     }
// };


// export default Product;
















// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const Product = ({ product }) => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.cartItems);
//   const [selectedCount, setSelectedCount] = useState(0);

//   useEffect(() => {
//     const cartItem = cartItems.find(item => item.productId === product.id);
//     if (cartItem) {
//       setSelectedCount(cartItem.quantity);
//     }
//   }, [product.id, cartItems]);

//   const handleAddToCart = () => {
//     setSelectedCount(1);
//     dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, product } });
//   };

//   const handleIncrement = () => {
//     setSelectedCount(selectedCount + 1);
//     dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, product } });
//   };

//   const handleDecrement = () => {
//     const newCount = selectedCount === 1 ? 0 : selectedCount - 1;
//     setSelectedCount(newCount);
//     if (newCount === 0) {
//       dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
//     }
//   };

//   return (
//     <div style={styles.productBox}>
//       <img src={product.image} alt={product.title} style={styles.image} />
//       <h3 style={styles.title}>{product.title}</h3>
//       <p style={styles.description}>{product.description}</p>
//       <p>Price: ${product.price}</p>

//       {!!selectedCount ? (
//         <div>
//           <button style={styles.operatorButton} onClick={handleDecrement}>
//             -
//           </button>
//           <span>{selectedCount}</span>
//           <button style={styles.operatorButton} onClick={handleIncrement}>
//             +
//           </button>
//         </div>
//       ) : (
//         <button onClick={handleAddToCart} style={styles.cartButton}>
//           Add to Cart
//         </button>
//       )}
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartReset = useSelector(state => state.cart.cartReset); // Add this line
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const cartItem = cartItems.find(item => item.productId === product.id);
    if (cartItem) {
      setSelectedCount(cartItem.quantity);
    } else {
      setSelectedCount(0); // Ensure count is reset if the item is not in the cart
    }
  }, [product.id, cartItems]);

  useEffect(() => {
    setSelectedCount(0); // Reset selectedCount on cart reset
  }, [cartReset]);

  const handleAddToCart = () => {
    setSelectedCount(1);
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, product } });
  };

  const handleIncrement = () => {
    setSelectedCount(selectedCount + 1);
    dispatch({ type: 'ADD_TO_CART', payload: { productId: product.id, product } });
  };

  const handleDecrement = () => {
    const newCount = selectedCount === 1 ? 0 : selectedCount - 1;
    setSelectedCount(newCount);
    if (newCount === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
    }
  };

  return (
    <div style={styles.productBox}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.description}>{product.description}</p>
      <p>Price: ${product.price}</p>

      {!!selectedCount ? (
        <div>
          <button style={styles.operatorButton} onClick={handleDecrement}>
            -
          </button>
          <span>{selectedCount}</span>
          <button style={styles.operatorButton} onClick={handleIncrement}>
            +
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} style={styles.cartButton}>
          Add to Cart
        </button>
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



