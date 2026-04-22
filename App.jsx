import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where Greenery Meets Peace</p>
          <button onClick={() => setShowProductList(true)}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
export default App;
