import { Link } from 'react-router-dom';
import { products } from '../data/products';


export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(p => (
          <li
            key={p.id}
            style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '10px',
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <div>
              <Link to={`/products/${p.id}`} className="product-link">
                {p.name}
              </Link>
              <div className="product-price">Rs {p.price.toFixed(2)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
