import axios from 'axios'
import { useCart } from '../context/CartContext.jsx'
import { useState } from 'react'

export default function Cart() {
  const { items, total, dispatch } = useCart()
  const [status, setStatus] = useState('')

  async function checkout(method = 'COD') {
    setStatus('Processing...')
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE || 'http://localhost:5000'}/api/orders`, {
        items: items.map(({ _id, qty }) => ({ productId: _id, qty })),
        method
      })
      dispatch({ type: 'CLEAR' })
      setStatus(`Order placed (${method}). Order ID: ${res.data.orderId}`)
    } catch (e) {
      setStatus('Error: ' + (e.response?.data?.message || e.message))
    }
  }

  return (
    <>
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-card">
          {items.length === 0 && <div>No items in cart.</div>}

          {items.map(i => (
            <div key={i._id} className="cart-row">
              <div className="cart-item-name">{i.name}</div>
              <div className="cart-item-qty">Qty: {i.qty}</div>
              <div className="cart-item-price">₹{i.price * i.qty}</div>
              <button className="btn ghost" onClick={() => dispatch({ type: 'REMOVE', id: i._id })}>Remove</button>
            </div>
          ))}

          {items.length > 0 && <>
            <hr />
            <div className="cart-total">
              <div>Total</div>
              <div className="price">₹{total}</div>
            </div>
            <div className="cart-actions">
              <button className="btn" onClick={() => checkout('COD')}>Cash on Delivery</button>
              <button className="btn secondary" onClick={() => checkout('Razorpay')}>Pay with Razorpay</button>
              <button className="btn ghost" onClick={() => checkout('Paytm')}>Pay with Paytm</button>
            </div>
          </>}

          <div className="status-text">{status}</div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .cart-container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        h2 {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #182848;
        }

        .cart-card {
          background: #fff;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.5rem 0;
        }

        .cart-item-name {
          flex: 2;
          font-weight: 600;
        }

        .cart-item-qty, .cart-item-price {
          flex: 1;
          text-align: center;
        }

        .cart-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.8rem;
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }

        .status-text {
          font-size: 0.9rem;
          color: #555;
          margin-top: 0.5rem;
        }

        /* Button Styles */
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

        .btn.secondary {
          background-color: #ffd700;
          color: #182848;
        }

        .btn.secondary:hover:not(:disabled) {
          background-color: #ffca28;
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

        /* Responsive */
        @media(max-width: 768px) {
          .cart-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
          }

          .cart-item-qty, .cart-item-price {
            text-align: left;
          }

          .cart-actions {
            flex-direction: column;
          }
        }

        @media(max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }

          .cart-card {
            padding: 1rem 1rem;
          }

          .cart-item-name {
            font-size: 0.95rem;
          }

          .cart-item-qty, .cart-item-price {
            font-size: 0.9rem;
          }

          .btn {
            font-size: 0.95rem;
            padding: 0.45rem 0.6rem;
          }

          .cart-total {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}
