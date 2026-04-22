import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const numericCost = parseInt(item.cost.replace('$', ''));
      return total + (numericCost * item.quantity);
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const calculateTotalCost = (item) => {
    const numericCost = parseInt(item.cost.replace('$', ''));
    return numericCost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit Price: {item.cost}</div>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <button className="continue_shopping_btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="checkout_btn" onClick={() => alert('Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
