import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Your Cart is Empty</h2>
        <Link to="/products">← Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
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

      <p><strong>Total:</strong> Rs {total.toFixed(2)}</p>
      <Link to="/payment">
        <button>Proceed to Payment</button>
      </Link>
    </div>
  );
}
