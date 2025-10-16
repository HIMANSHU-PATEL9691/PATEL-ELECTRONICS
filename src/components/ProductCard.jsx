import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { dispatch } = useCart()
  return (
    <>
      <div className="product-card">
        <div className="product-name">{product.name}</div>
        <div className="product-category">{product.category} {product.inStoreOnly ? '• In-store only' : ''}</div>
        <div className="product-price">₹{product.price}</div>
        <div className="product-stock">Stock: {product.stock}</div>
        <div className="product-actions">
          <button className="btn" onClick={() => dispatch({ type: 'ADD', item: product })} disabled={product.inStoreOnly}>
            Add to Cart
          </button>
          <button className="btn ghost" disabled={product.inStoreOnly}>
            Buy Now
          </button>
        </div>
        {product.inStoreOnly && <div className="in-store-note">Available in-store only</div>}
      </div>

      {/* Embedded CSS */}
      <style>{`
        .product-card {
          background: #fff;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          max-width: 300px;
          margin: auto;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .product-name {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .product-category, .product-stock, .in-store-note {
          font-size: 0.85rem;
          color: #555;
        }

        .product-price {
          font-weight: 600;
          font-size: 1rem;
          margin-top: 0.2rem;
        }

        .product-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .btn {
          flex: 1;
          padding: 0.5rem 0.8rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          background-color: #4b6cb7;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .btn:hover:not(:disabled) {
          background-color: #182848;
          transform: translateY(-2px);
        }

        .btn.ghost {
          background: #f0f0f0;
          color: #182848;
        }

        .btn.ghost:hover:not(:disabled) {
          background: #ddd;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .in-store-note {
          margin-top: 0.5rem;
          color: #aa5500;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .product-card {
            max-width: 90%;
            padding: 0.8rem;
          }

          .product-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .product-name {
            font-size: 1rem;
          }

          .product-price {
            font-size: 0.95rem;
          }

          .product-category, .product-stock, .in-store-note {
            font-size: 0.8rem;
          }

          .btn {
            padding: 0.45rem 0.6rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}
