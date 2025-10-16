import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We will get back shortly.')
    e.target.reset()
  }

  return (
    <>
      <div className="contact-container">
        <h2>Contact</h2>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="card">
            <h3>Send a message</h3>
            <form onSubmit={onSubmit}>
              <div className="row">
                <input className="input" placeholder="Your name" required />
                <input className="input" placeholder="Phone/Email" required />
              </div>
              <textarea className="input" rows="4" placeholder="How can we help?" required></textarea>
              <div className="form-actions">
                <button className="btn">Send</button> 
                <span className="small">{status}</span>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="card contact-info">
            <div className="contact-name">Patel Electronics</div>
            <div className="small">Excellence Road, Kareli, Narsinghpur, MP</div>
            <div className="small">Phone: +91-9691365052</div>
            <div className="small">WhatsApp: +91-9691365052</div>
            <div className="small">Hours: Mon–Sat 10:00–20:00</div>
          </div>
        </div>

        {/* Map */}
        <div className="card map-card">
          <iframe
            title="Map"
            width="100%" height="300" style={{ border: 0 }}
            loading="lazy" allowFullScreen
            src="https://www.google.com/maps?q=Kareli%20Narsinghpur&output=embed">
          </iframe>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .contact-container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        h2 {
          text-align: center;
          font-size: 2rem;
          color: #182848;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1rem;
        }

        .card {
          background: #fff;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 0.95rem;
        }

        textarea.input {
          width: 100%;
          resize: vertical;
        }

        .form-actions {
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.5rem 0.8rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          background-color: #4b6cb7;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .btn:hover {
          background-color: #182848;
          transform: translateY(-2px);
        }

        .contact-info .contact-name {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .map-card iframe {
          border-radius: 12px;
        }

        /* Responsive */
        @media(max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .row {
            flex-direction: column;
          }
        }

        @media(max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }

          .card {
            padding: 1rem 1rem;
          }

          .btn {
            width: 100%;
            font-size: 0.95rem;
          }

          .input {
            font-size: 0.9rem;
          }

          .contact-info .contact-name {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}
