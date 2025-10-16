import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    { name: 'Ravi Sharma', message: 'Quick and reliable service! My phone was fixed in a day.' },
    { name: 'Anjali Patel', message: 'Patel Electronics always delivers genuine accessories.' },
    { name: 'Suresh Singh', message: 'Highly recommend for in-store pickup and fast repairs.' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [products, setProducts] = useState([
    { _id: 1, name: 'Mobile Screen Protector', price: 199, image: '/products/protector.png' },
    { _id: 2, name: 'Wireless Earbuds', price: 899, image: '/products/earbuds.png' },
    { _id: 3, name: 'Laptop Charger', price: 1299, image: '/products/charger.png' },
    { _id: 4, name: 'TV Remote', price: 499, image: '/products/remote.png' },
    { _id: 5, name: 'Smartwatch Strap', price: 349, image: '/products/strap.png' },
     { _id: 2, name: 'Wireless Earbuds', price: 899, image: '/products/earbuds.png' },
    { _id: 3, name: 'Laptop Charger', price: 1299, image: '/products/charger.png' },
    { _id: 4, name: 'TV Remote', price: 499, image: '/products/remote.png' },
    { _id: 5, name: 'Smartwatch Strap', price: 349, image: '/products/strap.png' },
  ]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);
  

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="badge">Kareli • Since 2000</span>
            <h1>Trusted Electronics Repair & Accessories</h1>
            <p>Fast repairs. Genuine accessories. Local pickup & drop service.</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Book a Repair</Link>
              <Link to="/products" className="btn ghost">Shop Now</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/homelogo.png" alt="Electronics Repair" />
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="container services">
        <h3>Our Services</h3>
        <div className="grid grid-3">
          {['Mobile Repair', 'TV Repair', 'Accessories', 'Pickup & Drop', 'AMC Plans', 'Refurbished'].map((s, i) => (
            <div className="card service-card" key={i}>{s}</div>
          ))}
        </div>
      </section>

      {/* Festive Offers */}
      <section className="container festive">
        <h3>Festive Offers 🎉</h3>
        <div className="card festive-card">
          <strong>₹100 off</strong> on mobile screen replacement • Free diagnosis for TV sound issues
        </div>
      </section>

      {/* Featured Products */}
      <section className="container featured">
        <h3>Featured Products</h3>
        <div className="grid grid-4">
          {products.map(p => (
            <div className="card featured-card" key={p._id}>
              <img src={p.image} alt={p.name} />
              <div className="card-info">
                <div className="product-name">{p.name}</div>
                <div className="product-price">₹{p.price}</div>
                <Link to={`/products/${p._id}`} className="btn btn-small">View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container testimonials">
        <h3>What Kareli Says</h3>
        <div className="card testimonial-card">
          <div className="testimonial-name">{testimonials[currentIndex].name}</div>
          <div className="testimonial-message">"{testimonials[currentIndex].message}"</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container cta-container">
          <h3>Need Immediate Electronics Support?</h3>
          <p>We are just a click away! Fast service, trusted repairs, and genuine products.</p>
          <Link to="/contact" className="btn btn-cta">Contact Us</Link>
        </div>
      </section>

      {/* Embedded CSS */}
      <style>{`
        /* Base Container */
        .container {  margin: 0 auto; padding: 0 12px; }

        /* Hero Section */
        .hero { background: linear-gradient(135deg, #4b6cb7, #182848); color: #fff; padding: 4rem 1rem; display: flex; justify-content: center; align-items: center; }
        .hero-container { display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; }
        .hero-text { flex: 1; min-width: 280px; }
        .hero-text h1 { font-size: 2.5rem; margin: 1rem 0; line-height: 1.2; }
        .hero-text p { font-size: 1.1rem; margin-bottom: 1.5rem; }
        .hero-buttons { display: flex; flex-wrap: wrap; gap: 1rem; }
        .hero-image { flex: 1; text-align: center; min-width: 250px; }
        .hero-image img { max-width: 400px; width: 100%; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.3); }

        /* Buttons */
        .btn { background-color: #ffd700; color: #182848; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; display: inline-block; }
        .btn:hover { background-color: #ffca28; transform: translateY(-2px); }
        .btn.ghost { background: transparent; border: 2px solid #ffd700; color: #ffd700; }
        .btn.ghost:hover { background: #ffd700; color: #182848; }
        .btn-small { margin-top: 0.5rem; font-size: 0.85rem; padding: 0.4rem 0.8rem; }
        .btn-cta { background: #ffd700; color: #182848; margin-top: 1rem; font-size: 1.1rem; }

        /* Section Titles */
        .services h3, .festive h3, .featured h3, .testimonials h3 { text-align: center; margin-bottom: 1.5rem; color: #182848; }

        /* Grid */
        .grid { display: grid; gap: 1.5rem; }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
        .grid-4 { grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }

        /* Cards */
        .card { background: #fff; padding: 1rem; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.1); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px rgba(0,0,0,0.15); }

        .service-card { font-weight: 600; color: #182848; }
        .festive-card { background: linear-gradient(135deg, #ffd700, #ffca28); color: #182848; font-weight: 600; font-size: 1rem; }
        .featured-card img { max-width: 100%; border-radius: 8px; margin-bottom: 0.5rem; }
        .card-info { font-weight: 600; }
        .product-name { font-weight: 600; margin-bottom: 0.3rem; }
        .product-price { color: #4b6cb7; font-weight: 700; }

        /* Testimonials */
        .testimonial-card { background: #f0f0f0; color: #182848; padding: 1.5rem; font-style: italic; border-radius: 12px; }
        .testimonial-name { font-weight: 700; margin-bottom: 0.5rem; color: #4b6cb7; }

        /* CTA Section */
        .cta { background: #182848; color: #fff; text-align: center; padding: 3rem 1rem; margin-top: 2rem; border-radius: 12px; }

        /* Responsive */
        @media(max-width: 992px) {
          .hero-container { flex-direction: column; text-align: center; }
          .hero-image img { max-width: 300px; }
        }
        @media(max-width: 576px) {
          .hero-text h1 { font-size: 2rem; }
          .hero-text p { font-size: 1rem; }
          .btn { padding: 0.5rem 1rem; font-size: 0.9rem; }
        }
      `}</style>
    </>
  );
}
