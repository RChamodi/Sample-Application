import { Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';

const PRODUCTS_PER_PAGE = 2;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {currentProducts.map(p => (
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

      {/* Pagination controls */}
      <div style={{ marginTop: '70px' }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
