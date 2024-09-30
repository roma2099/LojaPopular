import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// Import your page components here
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="">
        <nav>
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
