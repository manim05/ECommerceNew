import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  searchTerm: '',
  sortOption: '',
  cart: {
    cartItems: [],
    cartReset: false,
  }
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_SORT_OPTION':
      return {
        ...state,
        sortOption: action.payload,
      };
    case 'ADD_TO_CART':
      const existingItem = state.cart.cartItems.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: state.cart.cartItems.map(item =>
              item.productId === action.payload.productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...state.cart.cartItems, { ...action.payload, quantity: 1 }],
          },
        };
      }
    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cart.cartItems
        .map(item =>
          item.productId === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: updatedCartItems,
        },
      };
    case 'RESET_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [],
          cartReset: !state.cart.cartReset,
        },
      };
    default:
      return state;
  }
};


const store = configureStore({
  reducer: rootReducer,
});

export default store;
