import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css'

const Menu = ({resetCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.searchTerm);
  const sortOption = useSelector(state => state.sortOption);

  return (
    <div className='menuContainer'>
      <input
        type="text"
        placeholder="Type here to search..."
        value={searchTerm}
        onChange={e => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
        className='searchInput'
      />
      <select
        value={sortOption}
        onChange={e => dispatch({ type: 'SET_SORT_OPTION', payload: e.target.value })}
        className='sortSelect'
        
      >
        <option value="">Default Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button className='cartButton' onClick={() => navigate('/cart')}>
        Cart
      </button>
      <button className='resetButton' onClick={resetCart}>
        Reset Cart
      </button>
    </div>
  );
};

export default Menu;