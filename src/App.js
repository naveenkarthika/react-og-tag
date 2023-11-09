import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/product'}>Product</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>

  );
}

export default App;
