import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import Homepage from './components/Homepage';
import Cart from './components/Cart';
import store from './components/Store';
import {Example, ProductsTable} from './components/MaterialR';

function App() {
  const routePaths = [
    {
      routePath: '/',
      component: <Homepage />,
    },
    {
      routePath: '/cart',
      component: <Cart />,
    },
    {
      routePath: '/m',
      component: <Example />,
    },
    {
      routePath: '/ec',
      component: <ProductsTable />,
    }
    
  ];

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div>
            <h1>E Commerce </h1>
            <Routes>
              {routePaths.map((route, index) => (
                <Route key={index} path={route.routePath} element={route.component} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;