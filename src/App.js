import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Fotter from './components/fotter/Fotter';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import ProductsItem from './components/shop/ProductsItem';
import CartItem from './components/cartItem/CartItem';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import AllDetails from './components/paymentaddress/AllDetails';
import ThankYou from './components/thanku/ThankYou';
import Login from './components/home/AUTH/login/Login';
import Error from './components/cartItem/error/Error';
import SignupPage from './components/home/AUTH/signup/SignupPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          <Route path="/error" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<AllDetails />} />
          <Route path="/shop" element={<ProductsItem />} />
          <Route path="/cart/:id" element={<CartItem />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
