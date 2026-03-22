import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';

import Header from './assets/components/Header';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';

import Home from './assets/pages/Home';
import ProductList from './assets/pages/ProductList';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Policies from './assets/pages/Policies';
import Cart from './assets/pages/Cart';
import Checkout from './assets/pages/Checkout';

function App() {
  return (
    <RecentlyViewedProvider>
      <Router>
        {/* Always full width */}
        <Header />
        <Navbar />

        {/* Main content wrapper - full width, no shrinking */}
        <div className="container-fluid px-4 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </RecentlyViewedProvider>
  );
}

export default App;


