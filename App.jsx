// Task 4: App.jsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page"> {/* This class is required for Task 3/4 */}
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Where Greenery Meets Peace</p>
            <button className="get-started-button" onClick={() => setShowProductList(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
export default App;
