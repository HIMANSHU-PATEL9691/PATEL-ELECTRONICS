import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import './App.css';

export default function RoutesView() {
  return (
    <div className="container" style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>Page not found.</div>} />
      </Routes>
    </div>
  )
}
