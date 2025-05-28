import { Link } from 'react-router-dom';
import React , { useContext }from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
export default function TopNav() {
    const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <header className="topnav">
      <button onClick={toggleTheme}>
        Theme: {theme === 'light' ? 'Light' : 'Dark'}
      </button>
      <Link to="/login">Login</Link>
      <Link to="/cart"> Cart ({totalItems})</Link>
    </header>
  );
}
