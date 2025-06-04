import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img 
        src="/images/Home.jpg" 
        alt="FreshMart Banner" 
        style={{ width: '600px', height: 'auto', marginBottom: '30px' }} 
      />
      <h1>Welcome to the FreshMart Supermarket!</h1>
      <p>Your one-stop shop for fresh groceries and daily essentials.</p>

      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' , borderRadius: '8px'}}>
          View Products
        </button>
      </Link>
      
    </div>
  );
}
