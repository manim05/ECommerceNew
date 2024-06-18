import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  products: [],
  searchTerm: '',
  sortOption: '',
  cart: {
    cartItems: [],
    cartReset: false, // Add this line
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
      const updatedCartItems = state.cart.cartItems.filter(item => item.productId !== action.payload);
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
            cartReset: !state.cart.cartReset, // Toggle the cartReset flag
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



// import { configureStore } from '@reduxjs/toolkit';

// // Define your initial state
// const initialState = {
//   products: [],
//   searchTerm: '',
//   sortOption: '',
//   cart: {
//     cartItems: [],
//   },
// };

// // Define your reducers
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_PRODUCTS':
//       return {
//         ...state,
//         products: action.payload,
//       };
//     case 'SET_SEARCH_TERM':
//       return {
//         ...state,
//         searchTerm: action.payload,
//       };
//     case 'SET_SORT_OPTION':
//       return {
//         ...state,
//         sortOption: action.payload,
//       };
//     case 'ADD_TO_CART':
//       const existingItem = state.cart.cartItems.find(item => item.productId === action.payload.productId);
//       if (existingItem) {
//         return {
//           ...state,
//           cart: {
//             ...state.cart,
//             cartItems: state.cart.cartItems.map(item =>
//               item.productId === action.payload.productId
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             ),
//           },
//         };
//       } else {
//         return {
//           ...state,
//           cart: {
//             ...state.cart,
//             cartItems: [...state.cart.cartItems, { ...action.payload, quantity: 1 }],
//           },
//         };
//       }
//     case 'REMOVE_FROM_CART':
//       const updatedCartItems = state.cart.cartItems.filter(item => item.productId !== action.payload);
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           cartItems: updatedCartItems,
//         },
//       };
//     case 'RESET_CART':
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           cartItems: [],
//         },
//         products: state.products.map(product => ({
//           ...product,
//           selectedCount: 0,
//         })),
//       };
//     default:
//       return state;
//   }
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;