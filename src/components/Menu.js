import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Menu = ({resetCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);
  const sortOption = useSelector(state => state.sortOption);

  return (
    <div style={styles.menuContainer}>
      <input
        type="text"
        placeholder="Type here to search..."
        value={searchTerm}
        onChange={e => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
        style={styles.searchInput}
      />
      <select
        value={sortOption}
        onChange={e => dispatch({ type: 'SET_SORT_OPTION', payload: e.target.value })}
        style={styles.sortSelect}
      >
        <option value="">Default Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button style={styles.cartButton} onClick={() => navigate('/cart')}>
        Cart
      </button>
      <button style={styles.resetButton} onClick={resetCart}>
        Reset Cart
      </button>
    </div>
  );
};

const styles = {
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    marginBottom: '20px',
  },
  searchInput: {
    marginLeft: '50px',
    padding: '10px',
    fontSize: '16px',
    width: '50%',
    marginRight: '50px',
  },
  sortSelect: {
    marginRight: '50px',
    padding: '10px',
    width: '25%',
    fontSize: '16px',
  },
  cartButton: {
    padding: '10px',
    marginRight: '50px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '25%',
  },
  resetButton: {
    padding: '10px',
    marginRight: '50px',
    fontSize: '16px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '15%',
  }
};
    
export default Menu;