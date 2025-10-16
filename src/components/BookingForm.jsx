import axios from 'axios'
import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({
    deviceType: 'Mobile',
    description: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    phone: '',
    address: ''
  })
  const [status, setStatus] = useState(null)

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE || 'http://localhost:5000'}/api/bookings`,
        form
      )
      setStatus('Booked! Reference: ' + res.data.ref)
      setForm({
        deviceType: 'Mobile',
        description: '',
        preferredDate: '',
        preferredTime: '',
        name: '',
        phone: '',
        address: ''
      })
    } catch (err) {
      setStatus('Error: ' + (err.response?.data?.message || err.message))
    }
  }

  return (
    <>
      <style>{`
        .booking-card {
          max-width: 700px;
          margin: 40px auto;
          background: #fff;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-family: "Poppins", sans-serif;
        }

        .form-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 12px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: 500;
          margin-bottom: 6px;
          color: #444;
        }

        input, select, textarea {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #007bff;
        }

        .btn {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s ease;
        }

        .btn:hover {
          background-color: #0056b3;
        }

        .status-text {
          font-size: 0.9rem;
          color: #555;
          margin-left: 8px;
          align-self: center;
        }

        .form-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }

          .booking-card {
            padding: 16px;
          }

          .form-title {
            font-size: 1.3rem;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <form className="booking-card" onSubmit={onSubmit}>
        <h2 className="form-title">Book a Device Pickup</h2>

        <div className="grid-2">
          <div className="form-group">
            <label>Device Type</label>
            <select name="deviceType" value={form.deviceType} onChange={onChange}>
              <option>Mobile</option>
              <option>TV</option>
              <option>Fan</option>
              <option>Mixer</option>
              <option>Emergency Light</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Preferred Time</label>
            <input
              type="time"
              name="preferredTime"
              value={form.preferredTime}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Problem Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            rows={3}
            placeholder="Screen crack? Battery? Charging port?"
          ></textarea>
        </div>

        <div className="grid-2">
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            name="address"
            value={form.address}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-footer">
          <button className="btn" type="submit">Book Pickup</button>
          <span className="status-text">{status}</span>
        </div>
      </form>
    </>
  )
}
