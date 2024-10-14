import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
 

  return (
    <Router>
      <div className="bg-background text-text">
      
        <Navbar />
        <div className="px-4 md:px-10">
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
