import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const [products, setProducts] = useState([])
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE || 'http://localhost:5000'}/api/products`)
      .then(r => setProducts(r.data))
      .catch(() => setProducts([]))
  }, [])

  const filtered = products.filter(p =>
    (cat === 'All' || p.category === cat) &&
    (q === '' || p.name.toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <>
      <h2>Products</h2>

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
          margin-bottom: 16px;
          padding: 12px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
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
  )
}
