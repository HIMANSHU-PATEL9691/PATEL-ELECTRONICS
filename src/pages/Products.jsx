import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';

export default function Products() {
  // Manual product list with local images
  const [products, setProducts] = useState([
    { _id: 1, name: 'Wireless Mouse', category: 'Mobile Accessories', price: 499, image: '/assets/images/products/mouse.jpg' },
    { _id: 2, name: 'USB-C Cable', category: 'Mobile Accessories', price: 299, image: '/assets/images/products/cable.jpg' },
    { _id: 3, name: 'Bluetooth Speaker', category: 'Small Electronics', price: 1200, image: '/assets/images/products/speaker.jpg' },
    { _id: 4, name: 'Refurbished Phone', category: 'Refurbished', price: 5500, image: '/assets/images/products/phone.jpg' },
    { _id: 5, name: 'AA Batteries Pack', category: 'Batteries/Remotes', price: 350, image: '/assets/images/products/batteries.jpg' },
    { _id: 6, name: 'Wireless Earbuds', category: 'Small Electronics', price: 2500, image: './assets/images/earbuds.jpg' },
  ]);

  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  // Filter products by search and category
  const filtered = products.filter(p =>
    (cat === 'All' || p.category === cat) &&
    (q === '' || p.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <h2 style={{ textAlign: 'center', color: '#182848', marginBottom: '1rem' }}>Products</h2>

      {/* Search and Filter */}
      <div className="row filter-card">
        <input
          className="input"
          placeholder="Search products..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <select value={cat} onChange={e => setCat(e.target.value)}>
          {['All', 'Mobile Accessories', 'Small Electronics', 'Refurbished', 'Batteries/Remotes'].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-3">
        {filtered.length > 0 ? (
          filtered.map(p => <ProductCard key={p._id} product={p} />)
        ) : (
          <div className="card no-product" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            No products found in this category.
          </div>
        )}
      </div>

      {/* Count */}
      <h4 style={{ marginTop: 16, textAlign: 'center' }}>
        Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''} in "{cat}"
      </h4>

      {/* Embedded CSS */}
      <style>{`
        .filter-card {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 0 auto 20px;
          padding: 12px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          max-width: 1000px;
          align-items: center;
        }

        .filter-card .input {
          flex: 1;
          min-width: 180px;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        .filter-card select {
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
          background: #fff;
        }

        .grid {
          display: grid;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid-3 {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .card {
          background: #fff;
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.12);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
          margin-bottom: 0.5rem;
        }

        .card h4 {
          font-weight: 700;
          margin-bottom: 0.3rem;
          color: #182848;
        }

        .card p {
          color: #ff5722;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .no-product {
          font-weight: 500;
          color: #555;
          padding: 2rem 0;
        }

        @media(max-width: 768px) {
          .filter-card { flex-direction: column; }
          .filter-card .input, .filter-card select { width: 100%; }
        }
      `}</style>
    </>
  );
}




// import { useEffect, useState } from 'react'

// // ✅ Correct imports (relative to src/pages/)
// import earbuds from '../assets/images/earbuds.png'
// import powerbank from '../assets/images/powerbank.png'
// import phonecase from '../assets/images/phonecase.png'
// import laptop from '../assets/images/laptop.png'
// import tablet from '../assets/images/tablet.png'
// import batteries from '../assets/images/batteries.png'
// import remote from '../assets/images/remote.png'
// import watch from '../assets/images/watch.png'
// import speaker from '../assets/images/speaker.png'

// // Optional fallback image
// import fallbackImage from '../assets/images/fallback.png' // ← create a simple default image if desired

// export default function Products() {
//   const [products, setProducts] = useState([])
//   const [q, setQ] = useState('')
//   const [cat, setCat] = useState('All')
//   const [cart, setCart] = useState([])

//   useEffect(() => {
//     const exampleProducts = [
//       { _id: '1', name: 'Wireless Earbuds', category: 'Mobile Accessories', price: 799, image: earbuds },
//       { _id: '2', name: 'Power Bank 10000mAh', category: 'Mobile Accessories', price: 1299, image: powerbank },
//       { _id: '3', name: 'Phone Case', category: 'Mobile Accessories', price: 299, image: phonecase },
//       { _id: '4', name: 'Refurbished Laptop', category: 'Refurbished', price: 21999, image: laptop },
//       { _id: '5', name: 'Refurbished Tablet', category: 'Refurbished', price: 10999, image: tablet },
//       { _id: '6', name: 'AA Batteries Pack', category: 'Batteries/Remotes', price: 299, image: batteries },
//       { _id: '7', name: 'TV Remote', category: 'Batteries/Remotes', price: 499, image: remote },
//       { _id: '8', name: 'Digital Watch', category: 'Small Electronics', price: 1499, image: watch },
//       { _id: '9', name: 'Portable Speaker', category: 'Small Electronics', price: 2199, image: speaker },
//     ]
//     setProducts(exampleProducts)
//   }, [])

//   const filtered = products.filter(p =>
//     (cat === 'All' || p.category === cat) &&
//     (q === '' || p.name.toLowerCase().includes(q.toLowerCase()))
//   )

//   const addToCart = (product) => {
//     setCart(prev => [...prev, product])
//     alert(`${product.name} added to cart!`)
//   }

//   return (
//     <>
//       <h2 style={{ textAlign: 'center', margin: '1rem 0', color: '#333', fontWeight: '600' }}>
//         Our Products
//       </h2>

//       {/* Search & Filter */}
//       <div className="filter-card">
//         <input
//           className="input"
//           placeholder="Search products..."
//           value={q}
//           onChange={e => setQ(e.target.value)}
//         />
//         <select value={cat} onChange={e => setCat(e.target.value)}>
//           {['All', 'Mobile Accessories', 'Small Electronics', 'Refurbished', 'Batteries/Remotes'].map(c => (
//             <option key={c}>{c}</option>
//           ))}
//         </select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-3">
//         {filtered.length > 0 ? (
//           filtered.map(p => (
//             <div key={p._id} className="card">
//               <img
//                 src={p.image || fallbackImage}
//                 alt={p.name}
//                 onError={e => { e.target.src = fallbackImage }}
//               />
//               <h3>{p.name}</h3>
//               <p className="category">{p.category}</p>
//               <p className="price">₹{p.price}</p>
//               <button onClick={() => addToCart(p)}>Add to Cart</button>
//             </div>
//           ))
//         ) : (
//           <div className="card no-product">
//             No products found in this category.
//           </div>
//         )}
//       </div>

//       <h4 style={{ marginTop: 16, textAlign: 'center', color: '#555' }}>
//         Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''} in "{cat}"
//       </h4>

//       {/* Inline Styles */}
//       <style>{`
//         .filter-card {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           margin: 0 auto 24px auto;
//           max-width: 900px;
//           padding: 12px;
//           background: #f9f9f9;
//           border-radius: 12px;
//           box-shadow: 0 6px 20px rgba(0,0,0,0.08);
//           justify-content: center;
//           align-items: center;
//         }
//         .filter-card .input {
//           flex: 1;
//           min-width: 180px;
//           padding: 0.6rem 1rem;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           font-size: 1rem;
//           transition: border 0.2s ease;
//         }
//         .filter-card .input:focus {
//           border-color: #007BFF;
//           outline: none;
//         }
//         .filter-card select {
//           padding: 0.6rem 1rem;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           font-size: 1rem;
//           background: #fff;
//           cursor: pointer;
//           transition: border 0.2s ease;
//         }
//         .filter-card select:focus {
//           border-color: #007BFF;
//           outline: none;
//         }

//         .grid {
//           display: grid;
//           gap: 1.5rem;
//           padding: 0 1rem;
//         }
//         .grid-3 {
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//         }

//         .card {
//           background: #fff;
//           border-radius: 16px;
//           padding: 1rem;
//           text-align: center;
//           box-shadow: 0 6px 20px rgba(0,0,0,0.08);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 8px 24px rgba(0,0,0,0.12);
//         }
//         .card img {
//           width: 100%;
//           border-radius: 12px;
//           margin-bottom: 12px;
//           object-fit: cover;
//           height: 180px;
//         }
//         .card h3 {
//           margin: 0.5rem 0;
//           color: #333;
//           font-size: 1.1rem;
//         }
//         .card .category {
//           color: #777;
//           font-size: 0.9rem;
//           margin-bottom: 0.5rem;
//         }
//         .card .price {
//           color: #007BFF;
//           font-weight: 600;
//           margin-bottom: 12px;
//         }
//         .card button {
//           padding: 0.6rem 1.2rem;
//           border: none;
//           border-radius: 8px;
//           background: #007BFF;
//           color: #fff;
//           cursor: pointer;
//           font-weight: 500;
//           transition: background 0.3s ease, transform 0.2s ease;
//         }
//         .card button:hover {
//           background: #0056b3;
//           transform: translateY(-2px);
//         }

//         .no-product {
//           grid-column: 1 / -1;
//           text-align: center;
//           padding: 2rem 0;
//           font-weight: 500;
//           color: #555;
//         }

//         @media(max-width: 768px) {
//           .filter-card { flex-direction: column; }
//           .filter-card .input, .filter-card select { width: 100%; }
//         }
//       `}</style>
//     </>
//   )
// }
