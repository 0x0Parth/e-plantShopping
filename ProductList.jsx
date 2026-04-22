// Inside ProductList.jsx Navbar
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

// In your JSX return:
<div className="cart-icon">
  <a href="#">
    <svg>...</svg> {/* Use an SVG or Icon */}
    <span className="cart-count">{totalItems}</span>
  </a>
</div>
