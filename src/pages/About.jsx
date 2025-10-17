export default function About() {
  return (
    <>
      <div className="about-container">
        <h2>About Us</h2>

        <div className="about-card">
          <div className="badge">Rooted in Kareli • Powered by Trust</div>

          <p>
            Welcome to <strong>Patel Electronics</strong> — Kareli’s trusted destination for
            electronics repair, genuine accessories, and personalized service.
            For nearly a decade, we’ve been solving tech problems with honesty,
            precision, and care — because for us, every device and every customer matters.
          </p>

          <h4>📍 Our Story</h4>
          <p>
            Established in 2015, <strong>Patel Electronics</strong> began as a small counter
            on Excellence Road, Kareli. What started with basic repair tools and a strong
            passion for electronics has grown into a full-service shop — trusted by hundreds
            of families and businesses across Kareli and Narsinghpur.
          </p>

          <h4>💡 Our Vision</h4>
          <p>
            Led by a new-generation entrepreneur with a Computer Science background,
            Patel Electronics is blending traditional trust with digital innovation.
            From mobile repairs to smart accessories and upcoming online services — we
            aim to make technology accessible, affordable, and reliable for everyone.
          </p>

          <h4>🤝 Why Locals Trust Us</h4>
          <ul>
            <li>✅ Fast & fair repairs — no hidden charges</li>
            <li>🔋 Genuine accessories — tested for durability</li>
            <li>🚚 Local pickup & delivery — convenience first</li>
            <li>🎉 Festive offers & loyalty rewards — giving back to our community</li>
            <li>💬 Friendly service — every customer is treated like family</li>
          </ul>

          <h4>🚀 What’s Next</h4>
          <p>
            We're soon launching an <strong>online platform</strong> to book repairs, shop accessories,
            and track your orders — right from your phone. Our mission is to serve not only Kareli,
            but every nearby town — with the same warmth, speed, and reliability.
          </p>

          <h4>📞 Connect With Us</h4>
          <p>
            Need a repair, an accessory, or quick tech advice? We’re just a message away.
            Visit our shop or connect via <strong>WhatsApp</strong> for instant support.
          </p>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3>👨‍🔧 Meet Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="img-container">
                <img src="./assets/images/owner1.jpg" alt="Mr. Kailash Patel" />
              </div>
              <h4>Mr. Kailash Patel</h4>
              <p>Founder & Tech Lead</p>
              <span>
                ITI-certified professional technician, ensuring precise repairs and trusted service.
              </span>
            </div>

            <div className="team-member">
              <div className="img-container">
                <img src="./assets/images/owner.jpg" alt="Upanshu Patel" />
              </div>
              <h4>Mr.Upanshu Patel</h4>
              <p>Co-Founder & Operations Head</p>
              <span>
                With 9+ years of hands-on repair experience, he ensures every device is handled with care.
              </span>
            </div>

            <div className="team-member">
              <div className="img-container">
                <img src="./assets/images/owner2.jpg" alt="Himanshu Patel" />
              </div>
              <h4>Himanshu Patel</h4>
              <p>Customer Relations & Marketing</p>
              <span>
                A Computer Science graduate leading Patel Electronics into the digital era.
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          max-width: 1100px;
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

        /* Team Section */
        .team-section {
          text-align: center;
          margin-top: 3rem;
        }

        .team-section h3 {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
          color: #182848;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .team-member {
          background: #fff;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-5px);
        }

        /* Image container to make perfect aspect ratio */
        .img-container {
          width: 100%;
          padding-top: 100%; /* 1:1 aspect ratio */
          position: relative;
          overflow: hidden;
          border-radius: 50%; /* circular images */
          margin-bottom: 0.8rem;
        }

        .img-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-member h4 {
          font-size: 1.1rem;
          color: #4b6cb7;
          margin-bottom: 0.3rem;
        }

        .team-member p {
          font-weight: 600;
          color: #182848;
          margin-bottom: 0.4rem;
        }

        .team-member span {
          font-size: 0.9rem;
          color: #555;
          display: block;
        }

        @media(max-width: 768px) {
          h2 { font-size: 1.75rem; }
          .about-card { padding: 1.5rem; }
        }

        @media(max-width: 480px) {
          h2 { font-size: 1.5rem; }
          .team-member .img-container { padding-top: 100%; }
        }
      `}</style>
    </>
  );
}
