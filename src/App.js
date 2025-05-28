import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import PaymentPage from './components/PaymentPage';
import Login from './components/Login';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import './App.css';
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
      <TopNav />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={AboutUs} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={CartPage} />

          </Switch>
        </div>
      </div>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
