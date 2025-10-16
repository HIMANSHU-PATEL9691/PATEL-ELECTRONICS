import BookingForm from '../components/BookingForm.jsx'

export default function Services() {
  const servicesList = [
    { name: 'Mobile Repair', desc: 'Screen, battery, charging port' },
    { name: 'TV Repair', desc: 'LED, remote, sound' },
    { name: 'Fan/Mixer/Emergency Light', desc: 'Servicing & parts' },
    { name: 'Pickup & Drop', desc: 'Local only' },
    { name: 'AMC Plans', desc: 'Annual maintenance' }
  ]

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Services</h2>

      <div className="grid grid-3 services-grid">
        {servicesList.map((s, idx) => (
          <div className="card service-card" key={idx}>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 6 }}>{s.name}</div>
            <div className="small">{s.desc}</div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 32, textAlign: 'center' }}>Book a Service</h3>
      <div className="booking-wrapper">
        <BookingForm />
      </div>

      <style>{`
        .services-grid {
          gap: 1.5rem;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .card {
          background: #fff;
          border-radius: 12px;
          padding: 1.2rem;
          text-align: center;
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        .service-card {
          font-weight: 500;
          color: #182848;
        }

        .booking-wrapper {
          max-width: 600px;
          margin: 16px auto 40px;
          padding: 0 12px;
        }

        /* BookingForm responsiveness */
        .booking-wrapper form {
          width: 100%;
        }

        @media(max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
        }

        h2, h3 {
          font-family: 'Poppins', sans-serif;
          color: #182848;
        }
      `}</style>
    </>
  )
}
