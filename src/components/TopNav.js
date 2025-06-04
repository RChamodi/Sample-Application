import { Link } from 'react-router-dom';
import React , { useContext }from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
export default function TopNav() {
    const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { toggleTheme, theme } = useContext(ThemeContext);

  const themeIcon = theme === 'dark' ? faMoon : faSun;
  return (
    <header className="topnav">
      <div className="brand">
        FreshMart
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <label className="theme-toggle" style={{ cursor: 'pointer' }}>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
            aria-label="Toggle theme"
            style={{ display: 'none' }}
          />
          <FontAwesomeIcon icon={themeIcon} size="lg" />
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Link to="/login">Login</Link>
      <Link to="/cart"> Cart ({totalItems})</Link>
      </div>
    </header>
  );
}
