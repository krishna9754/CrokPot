import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/home/otherSection/Navbar';
import Fotter from './components/home/fotter/Fotter';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import ProductsItem from './components/shop/ProductsItem';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ProductsItem />} />
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
