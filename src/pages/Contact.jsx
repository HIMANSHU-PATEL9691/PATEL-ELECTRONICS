import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(''); // success / error message
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !contact || !message) {
      setStatus('Please fill name, contact and message.');
      setTimeout(() => setStatus(''), 3500);
      return;
    }

    setLoading(true);
    // Simulate async send (replace with real axios/fetch when ready)
    setTimeout(() => {
      setLoading(false);
      setStatus('Thanks! We will get back to you shortly.');
      form.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 900);
  }

  return (
    <>
      <div className="contact-page">
        <header className="contact-header">
          <h1>Contact Patel Electronics</h1>
          <p className="lead">
            Need a repair, spare part or quick advice? Send us a message or use the quick contact buttons.
          </p>
        </header>

        <div className="contact-grid">
          {/* Left: Form */}
          <section className="card form-card" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading">Send us a message</h2>

            <form onSubmit={onSubmit} className="contact-form">
              <div className="two-col">
                <label>
                  <span className="label-text">Your name</span>
                  <input name="name" className="input" placeholder="e.g. Amit Sharma" required />
                </label>

                <label>
                  <span className="label-text">Phone or email</span>
                  <input name="contact" className="input" placeholder="Phone or email" required />
                </label>
              </div>

              <label>
                <span className="label-text">Email (optional)</span>
                <input name="email" className="input" placeholder="you@example.com" type="email" />
              </label>

              <label>
                <span className="label-text">Subject (optional)</span>
                <input name="subject" className="input" placeholder="What is this about?" />
              </label>

              <label>
                <span className="label-text">How can we help?</span>
                <textarea name="message" className="input textarea" rows="5" placeholder="Describe the problem or request..." required></textarea>
              </label>

              <div className="form-actions">
                <button type="submit" className={`btn primary ${loading ? 'loading' : ''}`} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => {
                    // quick WhatsApp fallback
                    window.open('https://wa.me/919691365052?text=Hi%20Patel%20Electronics,%20I%20need%20help', '_blank');
                  }}
                >
                  Message on WhatsApp
                </button>

                <div className="status" role="status" aria-live="polite">{status}</div>
              </div>
            </form>
          </section>

          {/* Right: Contact info & map */}
          <aside className="card info-card" aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading">Contact & Visit</h2>

            <div className="owner">
              <div className="owner-photo" aria-hidden="true">👨‍🔧</div>
              <div>
                <div className="owner-name">Patel Electronics</div>
                <div className="owner-sub">Rooted in Kareli • Since 2000</div>
              </div>
            </div>

            <div className="info-list">
              <div className="info-row">
                <div className="muted">Address</div>
                <div>Excellence Road, Kareli, Narsinghpur, MP</div>
              </div>

              <div className="info-row">
                <div className="muted">Phone</div>
                <div><a href="tel:+919691365052">+91 96913 65052</a></div>
              </div>

              <div className="info-row">
                <div className="muted">WhatsApp</div>
                <div><a href="https://wa.me/919691365052" target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
              </div>

              <div className="info-row">
                <div className="muted">Hours</div>
                <div>Mon – Sat · 10:00 – 20:00</div>
              </div>

              <div className="info-row">
                <div className="muted">Email</div>
                <div><a href="mailto:patelhimanshu6006@gmail.com">patelhimanshu6006@gmail.com</a></div>
              </div>
            </div>

            <div className="map-wrap">
              <iframe
                title="Patel Electronics location"
                src="https://www.google.com/maps?q=Kareli%20Narsinghpur&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="quick-actions">
              <a className="btn full" href="tel:+919691365052">Call Now</a>
              <a className="btn full ghost" href="https://wa.me/919691365052" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        :root{
          --card-bg: #ffffff;
          --accent: #4b6cb7;
          --accent-2: #ffd700;
          --muted: #6b7280;
          --radius: 12px;
          --shadow: 0 8px 20px rgba(17,24,39,0.06);
        }

        .contact-page{
          // max-width: 1100px;
          // margin: 2.2rem auto;
          // padding: 0 1rem;
          // color: #111827;
        }

        .contact-header{
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .contact-header h1{
          margin: 0;
          font-size: 1.9rem;
          color: var(--accent);
          letter-spacing: -0.3px;
        }
        .lead{
          margin-top: 0.5rem;
          color: var(--muted);
        }

        .contact-grid{
          display: grid;
          // grid-template-columns: 1.6fr 1fr;
          gap: 1.25rem;
          align-items: start;
        }

        /* Cards */
        .card{
          background: var(--card-bg);
          border-radius: var(--radius);
          padding: 1.25rem;
          box-shadow: var(--shadow);
          border: 1px solid rgba(15,23,42,0.04);
        }

        /* Form */
        .form-card h2{
          margin: 0 0 0.5rem 0;
          color: #0f172a;
          font-size: 1.1rem;
        }

        .contact-form .two-col{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        label{ display:block; margin-bottom: 0.75rem; }
        .label-text{ display:block; font-size:0.85rem; color:var(--muted); margin-bottom:0.35rem; }

        .input{
          width: 100%;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          border: 1px solid #e6edf8;
          background: linear-gradient(180deg, #fff, #fbfdff);
          font-size: 0.95rem;
          color: #0f172a;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
          transition: box-shadow 0.15s ease, border-color 0.15s ease, transform 0.06s ease;
        }
        .input:focus{
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 5px 18px rgba(75,108,183,0.08);
          transform: translateY(-1px);
        }
        .textarea{ min-height: 130px; resize: vertical; }

        .form-actions{
          display:flex;
          gap: 0.75rem;
          align-items:center;
          margin-top: 0.6rem;
          flex-wrap:wrap;
        }

        .btn{
          padding: 0.65rem 1rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn.primary{
          background: linear-gradient(90deg,var(--accent), #2b6aa3);
          color: #fff;
          box-shadow: 0 8px 20px rgba(75,108,183,0.12);
        }
        .btn.primary.loading{ opacity: 0.9; transform: translateY(0); }

        .btn.ghost{
          background: transparent;
          border: 1px solid rgba(17,24,39,0.06);
          color: #111827;
        }

        .status{
          color: #065f46; /* greenish */
          font-weight: 600;
          font-size: 0.95rem;
          margin-left: 0.5rem;
        }

        /* Info card */
        .info-card h2{ margin: 0 0 0.6rem 0; font-size: 1.05rem; color: #0f172a; }
        .owner{ display:flex; gap:0.9rem; align-items:center; margin-bottom:0.9rem; }
        .owner-photo{
          width:56px; height:56px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          background: linear-gradient(180deg, #fff, #f3f6ff);
          font-size:26px; box-shadow: inset 0 -6px 20px rgba(75,108,183,0.03);
        }
        .owner-name{ font-weight:700; color:#0f172a; }
        .owner-sub{ font-size:0.85rem; color:var(--muted); }

        .info-list{ margin-top: 0.5rem; display:flex; flex-direction:column; gap:0.6rem; }
        .info-row{ display:flex; justify-content:space-between; gap:1rem; align-items:center; }
        .info-row .muted{ color:var(--muted); font-size:0.9rem; }

        .map-wrap{
          margin-top: 1rem;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,0.04);
          box-shadow: 0 10px 30px rgba(15,23,42,0.05);
        }
        .map-wrap iframe{
          width:100%;
          height: 180px;
          border: 0;
          display: block;
        }

        .quick-actions{ display:flex; gap:0.6rem; margin-top: 0.9rem; flex-direction:column; }
        .btn.full{ width:100%; padding: 0.8rem; border-radius: 10px; font-weight:800; }
        .btn.full.ghost{ background: transparent; border: 1px solid rgba(17,24,39,0.06); color: #111827; }

        /* Responsive */
        @media (max-width: 980px){
          .contact-grid{ grid-template-columns: 1fr; }
          .contact-page{ padding: 0 0.75rem; }
          .map-wrap iframe{ height: 220px; }
        }

        @media (max-width: 520px){
          .contact-header h1{ font-size: 1.5rem; }
          .contact-header .lead{ font-size: 0.95rem; }
          .contact-form .two-col{ grid-template-columns: 1fr; }
          .product-actions { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
