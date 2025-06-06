import { Link,useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const product = products.find(p => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 

  const handleBuyNow = () => {
    history.push('/payment', { product, quantity });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Product added to cart!');
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: '20px' }}>
  <div style={{ marginBottom: '20px' }}>
    <Link to="/products" className="products-link">← Back to Shopping</Link>
  </div>

  <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
    {/* Image */}
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px'
      }}
    />

    {/* Details */}
    <div style={{ maxWidth: '500px' }}>
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> Rs {product.price.toFixed(2)}</p>
      
      <div style={{ margin: '10px 0' }}>
        <button
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          disabled={quantity === 1}
         className='quantity-button'>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button
          onClick={() => setQuantity(q => Math.min(q + 1, product.stock))}
          disabled={quantity === product.stock}
        className='quantity-button'>+</button>
        <p>{product.stock - quantity} items remaining</p>
        {quantity === product.stock && <p style={{ color: 'red' }}>Maximum quantity reached</p>}
      </div>

      <button
        onClick={handleAddToCart}
        style={{ marginRight: '10px', padding: '10px 20px', borderRadius: '8px' }}
      >Add to Cart</button>

      <button
        onClick={handleBuyNow}
        style={{ marginRight: '10px', padding: '10px 20px', borderRadius: '8px' }}
      >Buy Now</button>
    </div>
  </div>
</div>

  );
}
