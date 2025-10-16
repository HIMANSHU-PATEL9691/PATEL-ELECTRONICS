export default function About() {
  return (
    <>
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-card">
          <div className="badge">Rooted in Kareli • Powered by Trust</div>

          <p>
            Welcome to <strong>Patel Electronics</strong>, Kareli’s trusted destination for electronics repair, accessories, and personalized service. 
            For years, we've been solving everyday tech problems with honesty, precision, and care.
          </p>

          <h4>📍 Our Story</h4>
          <p>
            Founded by the Patel family, our shop began as a humble counter on Excellence Road. Today, it stands as a full-service electronics hub 
            serving Kareli and Narsinghpur. With the next generation stepping in, we're blending traditional values with modern technology to serve better and grow stronger.
          </p>

          <h4>💡 Our Vision</h4>
          <p>
            Led by a Computer Science graduate with hands-on experience in software development, we're digitizing our services, expanding our reach, 
            and building Patel Electronics into a brand that stands for quality, innovation, and local pride.
          </p>

          <h4>🤝 Why Locals Trust Us</h4>
          <ul>
            <li>Fast & fair repairs — no hidden charges</li>
            <li>Genuine accessories — handpicked for durability</li>
            <li>Local pickup & drop — because your time matters</li>
            <li>Festive offers & loyalty rewards — giving back to our community</li>
            <li>Personal attention — every customer is treated like family</li>
          </ul>

          <h4>🚀 What’s Next</h4>
          <p>
            We're launching an online platform to make booking repairs and shopping accessories easier than ever. 
            Our goal is to serve not just Kareli, but nearby towns — with the same warmth and reliability.
          </p>

          <h4>📞 Connect With Us</h4>
          <p>
            Whether you need a quick fix, a reliable accessory, or just want to say hello — we're here for you. 
            Visit us in-store or reach out via WhatsApp for instant support.
          </p>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .about-container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        h2 {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #182848;
        }

        .about-card {
          background: #fff;
          padding: 1.8rem 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .badge {
          display: inline-block;
          background: #4b6cb7;
          color: #fff;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        h4 {
          margin-top: 1.2rem;
          font-size: 1.1rem;
          color: #4b6cb7;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
        }

        ul {
          margin-left: 1.2rem;
          list-style: disc;
          color: #333;
        }

        ul li {
          margin: 0.4rem 0;
        }

        /* Responsive */
        @media(max-width: 768px) {
          h2 {
            font-size: 1.75rem;
          }

          .about-card {
            padding: 1.5rem 1.5rem;
          }

          h4 {
            font-size: 1rem;
          }

          p, ul li {
            font-size: 0.95rem;
          }
        }

        @media(max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }

          .about-card {
            padding: 1.2rem 1rem;
          }

          h4 {
            font-size: 0.95rem;
          }

          p, ul li {
            font-size: 0.9rem;
          }

          .badge {
            font-size: 0.75rem;
            padding: 0.25rem 0.6rem;
          }
        }
      `}</style>
    </>
  )
}
