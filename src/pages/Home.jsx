// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const [testimonials, setTestimonials] = useState([
//     { name: 'Ravi Sharma', message: 'Quick and reliable service! My phone was fixed in a day.' },
//     { name: 'Anjali Patel', message: 'Patel Electronics always delivers genuine accessories.' },
//     { name: 'Suresh Singh', message: 'Highly recommend for in-store pickup and fast repairs.' },
//   ]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [products, setProducts] = useState([
//     { _id: 1, name: 'Mobile Screen Protector', price: 199, image: './assets/images/phonecase.jpg' },
//     { _id: 2, name: 'Mobile Batteries', price: 899, image: './assets/images/batteries.jpg' },
//     { _id: 3, name: 'Laptop Charger', price: 1299, image: './assets/images/laptop.jpg' },
//     { _id: 4, name: 'TV Remote', price: 499, image: './assets/images/remote.jpg' },
//     { _id: 5, name: 'Smartwatch Strap', price: 349, image: './assets/images/watch.jpg' },
//     { _id: 6, name: 'Smart Tablet', price: 0, image: './assets/images/tablet.jpg' },
//   ]);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [testimonials]);

//   // Save products to localStorage for ProductPage access
//   useEffect(() => {
//     localStorage.setItem('allProducts', JSON.stringify(products));
//   }, [products]);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="container hero-container">
//           <div className="hero-text">
//             <span className="badge">Kareli • Since 2000</span>
//             <h1>Trusted Electronics Repair & Accessories</h1>
//             <p>Fast repairs. Genuine accessories. Local pickup & drop service.</p>
//             <div className="hero-buttons">
//               <Link to="/services" className="btn">Book a Repair</Link>
//               <Link to="/products" className="btn ghost">Shop Now</Link>
//             </div>
//           </div>
//           <div className="hero-image">
//             <img src="./assets/images/homelogo.png" alt="Electronics Repair" />
//           </div>
//         </div>
//       </section>

//       {/* Quick Services */}
//       <section className="container services">
//         <h3>Our Services</h3>
//         <div className="grid grid-3">
//           {['Mobile Repair', 'TV Repair', 'Accessories', 'Pickup & Drop', 'AMC Plans', 'Refurbished'].map((s, i) => (
//             <div className="card service-card" key={i}>{s}</div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="container featured">
//         <h3>Featured Products</h3>
//         <div className="grid grid-4">
//           {products.map(p => (
//             <div className="card featured-card" key={p._id}>
//               <div className="product-image">
//                 <img src={p.image} alt={p.name} />
//               </div>
//               <div className="card-info">
//                 <div className="product-name">{p.name}</div>
//                 <div className="product-price">₹{p.price}</div>
//                 <Link to={`/products/${p._id}`} className="btn btn-small">View</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="container testimonials">
//         <h3>What Kareli Says</h3>
//         <div className="card testimonial-card">
//           <div className="testimonial-name">{testimonials[currentIndex].name}</div>
//           <div className="testimonial-message">"{testimonials[currentIndex].message}"</div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="cta">
//         <div className="container cta-container">
//           <h3>Need Immediate Electronics Support?</h3>
//           <p>We are just a click away! Fast service, trusted repairs, and genuine products.</p>
//           <Link to="/contact" className="btn btn-cta">Contact Us</Link>
//         </div>
//       </section>

//       {/* Embedded CSS */}
//       <style>{`
//         .container { margin: 0 auto; padding: 0 12px; }
//         .hero { background: linear-gradient(135deg, #4b6cb7, #182848); color: #fff; padding: 4rem 1rem; display: flex; justify-content: center; align-items: center; }
//         .hero-container { display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; }
//         .hero-text { flex: 1; min-width: 280px; }
//         .hero-text h1 { font-size: 2.5rem; margin: 1rem 0; line-height: 1.2; }
//         .hero-text p { font-size: 1.1rem; margin-bottom: 1.5rem; }
//         .hero-buttons { display: flex; flex-wrap: wrap; gap: 1rem; }
//         .hero-image { flex: 1; text-align: center; min-width: 250px; }
//         .hero-image img { max-width: 400px; width: 100%; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.3); }

//         .btn { background-color: #ffd700; color: #182848; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.3s ease; display: inline-block; }
//         .btn:hover { background-color: #ffca28; transform: translateY(-2px); }
//         .btn.ghost { background: transparent; border: 2px solid #ffd700; color: #ffd700; }
//         .btn.ghost:hover { background: #ffd700; color: #182848; }
//         .btn-small { margin-top: 0.5rem; font-size: 0.85rem; padding: 0.4rem 0.8rem; }
//         .btn-cta { background: #ffd700; color: #182848; margin-top: 1rem; font-size: 1.1rem; }

//         h3 { text-align: center; margin-bottom: 1.5rem; color: #182848; }

//         .grid { display: grid; gap: 1.5rem; }
//         .grid-3 { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
//         .grid-4 { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }

//         .card { background: #fff; padding: 1rem; border-radius: 12px; box-shadow: 0 6px 15px rgba(0,0,0,0.1); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; }
//         .card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px rgba(0,0,0,0.15); }

//         .service-card { font-weight: 600; color: #182848; }
//         .featured-card { display: flex; flex-direction: column; align-items: center; }
//         .product-image { width: 100%; height: 180px; overflow: hidden; display: flex; justify-content: center; align-items: center; margin-bottom: 0.5rem; }
//         .product-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }

//         .card-info { font-weight: 600; width: 100%; }
//         .product-name { font-weight: 600; margin-bottom: 0.3rem; }
//         .product-price { color: #4b6cb7; font-weight: 700; margin-bottom: 0.5rem; }

//         .testimonial-card { background: #f0f0f0; color: #182848; padding: 1.5rem; font-style: italic; border-radius: 12px; }
//         .testimonial-name { font-weight: 700; margin-bottom: 0.5rem; color: #4b6cb7; }

//         .cta { background: #182848; color: #fff; text-align: center; padding: 3rem 1rem; margin-top: 2rem; border-radius: 12px; }

//         @media(max-width: 992px) {
//           .hero-container { flex-direction: column; text-align: center; }
//           .hero-image img { max-width: 300px; }
//         }
//         @media(max-width: 576px) {
//           .hero-text h1 { font-size: 2rem; }
//           .hero-text p { font-size: 1rem; }
//           .btn { padding: 0.5rem 1rem; font-size: 0.9rem; }
//         }
//       `}</style>
//     </>
//   );
// }
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    { name: 'Ravi Sharma', message: 'Quick and reliable service! My phone was fixed in a day.', city: 'Kareli' },
    { name: 'Anjali Patel', message: 'Patel Electronics always delivers genuine accessories.', city: 'Hiran' },
    { name: 'Suresh Singh', message: 'Highly recommend for in-store pickup and fast repairs.', city: 'Kareli' },
    { name: 'Deepika Rao', message: 'The AMC plan is worth it. Never worry about my TV breaking down again!', city: 'Narsinghpur' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [products, setProducts] = useState([
    { _id: 1, name: 'Mobile Screen Protector (Glass)', price: 199, image: './assets/images/phonecase.jpg', category: 'Accessory' },
    { _id: 2, name: 'Premium Replacement Mobile Battery', price: 899, image: './assets/images/batteries.jpg', category: 'Component' },
    { _id: 3, name: 'Universal Laptop Charger (90W)', price: 1299, image: './assets/images/laptop.jpg', category: 'Accessory' },
    { _id: 4, name: 'Smart TV Voice Remote', price: 499, image: './assets/images/remote.jpg', category: 'Accessory' },
    { _id: 5, name: 'Stylish Smartwatch Strap (Silicone)', price: 349, image: './assets/images/watch.jpg', category: 'Accessory' },
    { _id: 6, name: 'Smart Tablet (Refurbished)', price: 4999, image: './assets/images/tablet.jpg', category: 'Refurbished' },
    { _id: 7, name: 'Wired Gaming Headphones', price: 699, image: './assets/images/Wired Gaming Headphones.jpg', category: 'Audio' },
    { _id: 8, name: 'Portable Bluetooth Speaker', price: 1499, image: './assets/images/speaker.jpg', category: 'Audio' },
    { _id: 9, name: 'Wire', price: 599, image: './assets/images/wire.jpg', category: 'Accessory' },
    { _id: 10, name: 'DTH', price: 899, image: './assets/images/dth.jpg', category: 'Accessory' },
    { _id: 11, name: ' Television', price: 3499, image: './assets/images/tv.jpg', category: 'Refurbished' },
    { _id: 12, name: 'Bulb', price: 99, image: './assets/images/bulb.jpg', category: 'Accessory' },
  ]);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  // Save products to localStorage
  useEffect(() => {
    localStorage.setItem('allProducts', JSON.stringify(products));
  }, [products]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="badge">Kareli • Since 2000</span>
            <h1>Trusted Electronics Repair & Genuine Accessories</h1>
            <p>Your local one-stop shop for fast, high-quality device repairs, genuine accessories, and reliable AMC service plans. We serve Kareli, Hiran, and Narsinghpur.</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">Book a Repair 🛠️</Link>
              <Link to="/products" className="btn ghost">Explore Accessories ✨</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="./assets/images/homelogo.png" alt="Patel Electronics Repair Service" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="container value-prop">
        <h2>Why Choose Patel Electronics?</h2>
        <p className="subtitle">We've been the community's trusted repair and accessories provider for over two decades.</p>
        <div className="grid grid-3">
          <div className="card value-card">
            <span className="icon">✅</span>
            <h4>Genuine Parts Only</h4>
            <p>High-quality, authentic components for lasting repairs and reliable warranty.</p>
          </div>
          <div className="card value-card">
            <span className="icon">⚡</span>
            <h4>Fast Turnaround</h4>
            <p>Most repairs completed within 24 hours to get you back online quickly.</p>
          </div>
          <div className="card value-card">
            <span className="icon">🏘️</span>
            <h4>Local Pickup & Drop</h4>
            <p>Convenient service available in Kareli and surrounding areas.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container services">
        <h2>Quick Glance at Our Services</h2>
        <div className="grid grid-3">
          {['Mobile Screen & Battery Repair', 'LED/LCD TV Service', 'Annual Maintenance Contracts (AMC)', 'Computer & Laptop Service', 'Genuine Accessories', 'Refurbished Devices'].map((s, i) => (
            <Link to="/services" className="card service-card" key={i}>
              <div className="service-title">{s}</div>
              <div className="service-link">View Details →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container featured">
        <h2>Bestselling Products & Accessories</h2>
        <div className="grid grid-4">
          {products.map(p => (
            <div className="featured-card" key={p._id}>
              <div className="product-image">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="card-info">
                <div className="product-category">{p.category}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-price">₹{p.price.toLocaleString('en-IN')}</div>
                <Link to={`/products/${p._id}`} className="btn btn-small">View Item</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-cta">
          <Link to="/products" className="btn btn-large">Shop All 80+ Products</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="card testimonial-card">
          <div className="testimonial-message">"{testimonials[currentIndex].message}"</div>
          <div className="testimonial-footer">
            <span className="testimonial-name">~ {testimonials[currentIndex].name}</span>
            <span className="testimonial-city">, {testimonials[currentIndex].city}</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container cta-container">
          <h3>Need Immediate Electronics Support?</h3>
          <p>Don't wait! Get fast service, trusted repairs, and genuine products today.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-cta">Contact Us Now</Link>
            <a href="tel:+919691365052" className="btn btn-cta ghost-cta">Call Us: 9691365052</a>
          </div>
        </div>
      </section>

      {/* Embedded CSS */}
      <style>{`
        /* Global & Utility */
        .container { margin: 0 auto; padding: 0 1rem; }
        section { padding: 3rem 0; }
        h2 { text-align: center; font-size: 2rem; margin-bottom: 0.5rem; color: #182848; }
        .subtitle { text-align: center; color: #666; margin-bottom: 2rem; font-size: 1.1rem; }

        /* Buttons */
        .btn { background-color: #ffd700; color: #182848; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 700; text-decoration: none; transition: all 0.3s ease; display: inline-block; border: none; }
        .btn:hover { background-color: #ffca28; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .btn.ghost { background: transparent; border: 2px solid #ffd700; color: #ffd700; }
        .btn.ghost:hover { background: #ffd700; color: #182848; border-color: #ffd700; }
        .btn-small { margin-top: 0.75rem; font-size: 0.9rem; padding: 0.5rem 1rem; text-align: center; }
        .btn-large { font-size: 1.1rem; padding: 1rem 2rem; border-radius: 8px; background-color: #4b6cb7; color: #fff;margin-bottom: 2rem; }
        .btn-large:hover { background-color: #3a529b; }

        /* Grid */
        .grid { display: grid; gap: 1.5rem; }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .grid-4 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }

        /* Card Base */
        .card { background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; overflow: hidden; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
        .badge { background: #ffeb3b; color: #182848; padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: 600; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem; }

        /* Hero Section */
        .hero { background: linear-gradient(135deg, #4b6cb7, #182848); color: #fff; padding: 5rem 1rem; }
        .hero-container { display: flex; flex-wrap: wrap; gap: 3rem; align-items: center; }
        .hero-text { flex: 1; min-width: 300px; }
        .hero-text h1 { font-size: 3rem; margin: 1rem 0; line-height: 1.1; font-weight: 800; }
        .hero-text p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; }
        .hero-buttons { display: flex; flex-wrap: wrap; gap: 1.5rem; }
        .hero-image { flex: 1; text-align: center; min-width: 250px; }
        .hero-image img { max-width: 450px; width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }

        /* Value Proposition */
        .value-prop { background-color: #f7f9fc; padding-bottom: 4rem; }
        .value-card { padding: 2rem; text-align: left; }
        .value-card .icon { font-size: 2rem; margin-bottom: 1rem; display: block; color: #4b6cb7; }
        .value-card h4 { font-size: 1.3rem; margin-bottom: 0.5rem; color: #182848; }
        .value-card p { color: #555; }

        /* Services */
        .service-card { padding: 2rem; border: 1px solid #eee; text-decoration: none; align-items: center; justify-content: center; min-height: 120px; }
        .service-card:hover { border-color: #ffd700; background-color: #fffaf0; }
        .service-title { font-weight: 700; color: #182848; font-size: 1.1rem; }
        .service-link { font-size: 0.85rem; color: #4b6cb7; margin-top: 0.5rem; font-weight: 600; }

        /* Featured Products */
        .featured-card { padding: 0; background: #fff; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; height: 100%; }
        .featured-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
        .product-image { width: 100%; height: 180px; display: flex; justify-content: center; align-items: center; background: #f8f8f8; }
        .product-image img { max-width: 90%; max-height: 100%; object-fit: contain; transition: transform 0.3s ease; }
        .featured-card:hover .product-image img { transform: scale(1.05); }
        .card-info { padding: 1rem; display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; text-align: left; }
        .product-category { font-size: 0.75rem; font-weight: 700; color: #4b6cb7; text-transform: uppercase; margin-bottom: 0.25rem; }
        .product-name { font-size: 1rem; font-weight: 600; color: #182848; margin-bottom: 0.5rem; }
        .product-price { font-weight: 700; font-size: 1.1rem; color: #ff5722; margin-bottom: 0.75rem; }
        .featured-cta { text-align: center; margin-top: 2rem; }

        /* Testimonials */
        .testimonials-section { background-color: #f7f9fc; padding-top: 2rem; }
        .testimonial-card { background: #fff; border-left: 5px solid #4b6cb7; padding: 2rem; max-width: 700px; margin: 0 auto; text-align: left; }
        .testimonial-message { font-size: 1.25rem; font-style: italic; color: #333; margin-bottom: 1rem; line-height: 1.5; }
        .testimonial-footer { text-align: right; }
        .testimonial-name { font-weight: 700; color: #182848; }
        .testimonial-city { font-style: normal; color: #666; font-size: 0.9rem; }

        /* Call to Action */
        .cta { background: #182848; color: #fff; text-align: center; padding: 4rem 1rem; margin-top: 2rem; border-radius: 15px; }
        .cta-container { max-width: 800px; }
        .cta h3 { color: #fff; font-size: 2rem; margin-bottom: 1rem; }
        .cta p { font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9; }
        .cta-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 1.5rem; }
        .btn-cta { background: #ffd700; color: #182848; font-size: 1.1rem; }
        .btn-cta.ghost-cta { background: transparent; border: 2px solid #fff; color: #fff; }
        .btn-cta.ghost-cta:hover { background: #fff; color: #182848; border-color: #fff; }

        /* Media Queries */
        @media(max-width: 992px) {
          .hero-container { flex-direction: column; text-align: center; }
          .hero-image img { max-width: 400px; }
          .hero-text h1 { font-size: 2.5rem; }
        }
        @media(max-width: 576px) {
          .hero { padding: 3rem 1rem; }
          .hero-text h1 { font-size: 2rem; }
          .hero-text p { font-size: 1rem; }
          .btn { padding: 0.6rem 1.2rem; font-size: 0.9rem; }
          .grid-3, .grid-4 { grid-template-columns: 1fr; }
          .cta h3 { font-size: 1.5rem; }
          .product-image { height: 160px; }
        }
      `}</style>
    </>
  );
}
