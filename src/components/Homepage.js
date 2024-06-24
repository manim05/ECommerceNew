import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import Menu from './Menu';
import { sortByPriceAscending, sortByPriceDescending, filterProducts } from '../utils/sortFilter';
import Loader from './Loader';
import useFetch from '../hooks/useFetch';

import './styles.css'

// final


const Homepage = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const searchTerm = useSelector(state => state.searchTerm);
  const sortOption = useSelector(state => state.sortOption);


  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, searchTerm);

    return sortOption === 'asc' ? sortByPriceAscending(filtered)
         : sortOption === 'desc' ? sortByPriceDescending(filtered)
         : filtered;
  }, [products, searchTerm, sortOption]);

  const handleCartReset = () => {
    dispatch({ type: 'RESET_CART' });
  };

  const { data, loading, error } = useFetch('https://fakestoreapi.com/products/');

  useEffect(() => {
    if (data.length > 0) {
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    }
  }, [data, dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Menu resetCart={handleCartReset}/>

      {!filteredProducts.length ? (<Loader />)
        :(
          <div className='gridContainer'
                // style={styles.gridContainer}
                >
            {filteredProducts.map(product => (
              <Product key={product.id} product={product} />
          ))}
          </div>
        )}
    </div>
  );
};

// const styles = {
//   gridContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(4, 1fr)',
//     gap: '16px',
//   },
// };

export default Homepage;




