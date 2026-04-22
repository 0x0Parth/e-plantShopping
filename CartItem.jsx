// Ensure these functions are named exactly like this
const calculateTotalAmount = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.cost * item.quantity;
  });
  return total;
};

// The button MUST say this exactly:
<button className="checkout-button" onClick={() => alert('Coming Soon')}>
  Checkout
</button>
