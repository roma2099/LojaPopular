import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme');
    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.add('light')
    }
  }, [])
  const hadleChangeTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  return (
    <Router>
      <div className="bg-background text-text">
        <nav className="flex h-14 w-full  items-center px-4 " >
          <h1 className=" font-bold">Loja Popular</h1>
          <div className="relative flex">
        <input type="search" name="search" placeholder="Search"/>
        <button type="submit" className="bg-primary text-background ">search</button>
        </div>
        <div>
            <button onClick={hadleChangeTheme}>Change Theme</button>
          </div>
          <ul className="flex gap-4 ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>



        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
