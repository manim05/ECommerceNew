import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Homepage from './components/Homepage';
import Cart from './components/Cart';


function App() {

  const routePaths = [
    {
      routePath: "/",
      component: <Homepage/>
    },
    {
      routePath: "/cart",
      component: <Cart />
    },

  ]

  return (
    <Router>
    <div className="App">
      <div>
        <h1>E Commerce Website</h1>
        <Routes>
         {routePaths.map((route, index) => (
              <Route key={index} path={route.routePath} element={route.component} />
            ))}
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
