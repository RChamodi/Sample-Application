import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
}
