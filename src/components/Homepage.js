// import React, { useEffect, useState, useMemo } from 'react';
// import Product from './Product';
// import Menu from './Menu';
// import { sortByPriceAscending,sortByPriceDescending,filterProducts } from '../utils/sortFilter';
// import { updateCart } from '../utils/cartUtils';
// import Loader from './Loader';


// const Homepage = () => {
//     const [products, setProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [sortOption, setSortOption] = useState('');
//     const [cartReset, setCartReset] = useState(false);

//     const [cartItems, setCartItems] = useState(() => {
//         const savedCart = localStorage.getItem('cart');
//         return savedCart ? JSON.parse(savedCart) : [];
//     });

//     const resetCart = () => {
//         setCartItems([]);
//         localStorage.removeItem('cart');
//         setCartReset(true);
//     };

//     const filteredProducts = useMemo(() => {
//         const filtered = filterProducts(products, searchTerm);

//         return sortOption === 'asc' ? sortByPriceAscending(filtered) : 
//                sortOption === 'desc' ? sortByPriceDescending(filtered) : filtered;  

//     }, [products, searchTerm, sortOption]);

//     const handleUpdateCart = (productId, action) => {
//         const updatedCartItems = updateCart(cartItems, productId, action, products);
//         setCartItems(updatedCartItems);
//         localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//         setCartReset(false);
//     };

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products/')
//             .then(res => res.json())
//             .then(json => {
//                 // console.log(json); 
//                 setProducts(json); 
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []); 

//     return (
//         <div>
//             <Menu 
//                 searchTerm={searchTerm}
//                 setSearchTerm={setSearchTerm}
//                 sortOption={sortOption}
//                 setSortOption={setSortOption}
//                 resetCart={resetCart}
//                 cartItems={cartItems}    
//             />


//             { !filteredProducts.length ? (<Loader />) : 
            
//             (<div style={styles.gridContainer}>
//                 {filteredProducts.map(product => (
//                     <Product key={product.id} product={product} updateCart={handleUpdateCart} cartReset={cartReset} />
//                 ))}
//             </div>)


//             }
            
//         </div>
//     );
// };

// const styles = {
//     gridContainer: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '16px',
//     },
// };

// export default Homepage;






import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import Menu from './Menu';
import { sortByPriceAscending, sortByPriceDescending, filterProducts } from '../utils/sortFilter';
import Loader from './Loader';

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const searchTerm = useSelector(state => state.searchTerm);
  const sortOption = useSelector(state => state.sortOption);
  const cartItems = useSelector(state => state.cart.cartItems);

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, searchTerm);

    return sortOption === 'asc'
      ? sortByPriceAscending(filtered)
      : sortOption === 'desc'
      ? sortByPriceDescending(filtered)
      : filtered;
  }, [products, searchTerm, sortOption]);

  const handleUpdateCart = (productId, action) => {
    dispatch({ type: `${action.toUpperCase()}_TO_CART`, payload: { productId } });
  };

  const handleCartReset = () => {
    dispatch({ type: 'RESET_CART' });
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        dispatch({ type: 'SET_PRODUCTS', payload: json });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <Menu
        searchTerm={searchTerm}
        setSearchTerm={value => dispatch({ type: 'SET_SEARCH_TERM', payload: value })}
        sortOption={sortOption}
        setSortOption={value => dispatch({ type: 'SET_SORT_OPTION', payload: value })}
        resetCart={handleCartReset}
        cartItems={cartItems}
      />

      {!filteredProducts.length ? (
        <Loader />
      ) : (
        <div style={styles.gridContainer}>
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} updateCart={handleUpdateCart} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  },
};

export default Homepage;




