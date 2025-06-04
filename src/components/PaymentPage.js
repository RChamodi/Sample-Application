import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

export default function PaymentPage() {
  const { cartItems } = useCart();
  const location = useLocation();
  const { product, quantity } = location.state || {};

  // Handle Buy Now
  if (product) {
    const totalPrice = product.price * quantity;
    return (
      <div style={{ padding: '20px' }}>
        <h1>Payment Page</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{quantity}</td>
              <td>Rs {product.price.toFixed(2)}</td>
              <td>Rs {totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '20px' }}><strong>Total:</strong> Rs {totalPrice.toFixed(2)}</p>
        <button onClick={() =>alert('Payment processed!')} style={{ marginTop: '10px', borderRadius:'8px' }}>
          Pay Now
        </button>
      </div>
    );
  }

  // Handle Cart Checkout
  if (!cartItems || cartItems.length === 0) {
    return <p style={{ padding: '20px' }}>No products in cart.</p>;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Payment Page</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ product, quantity }, index) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{quantity}</td>
              <td>Rs {product.price.toFixed(2)}</td>
              <td>Rs {(product.price * quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: '20px' }}><strong>Total:</strong> Rs {total.toFixed(2)}</p>
      <button onClick={() => alert('Payment processed!')} style={{ padding: '10px 20px', borderRadius:'8px' }}>
        Pay Now
      </button>
    </div>
  );
}
