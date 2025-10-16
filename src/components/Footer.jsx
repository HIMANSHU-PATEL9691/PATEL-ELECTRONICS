import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Business Info */}
          <div className="footer-section">
            <h3 className="footer-title">Patel Electronics</h3>
            <p className="footer-text">Excellence Road, Kareli, Narsinghpur, MP</p>
            <p className="footer-text">Mon–Sat: 10:00–20:00</p>
            <p className="footer-text">📞 +91 9691365052</p>
            <p className="footer-text">✉ patelhimanshu6006@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com/patelelectronics" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/patelelectronics" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9691365052" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Patel Electronics. All rights reserved.
        </div>
      </footer>

      {/* Embedded CSS */}
      <style>{`
        /* Footer Base */
        .footer {
          background: linear-gradient(135deg, #182848, #4b6cb7);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          padding: 3rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        /* Footer Container */
        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Footer Sections */
        .footer-section {
          min-width: 220px;
          flex: 1;
        }

        .footer-title {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #ffd700;
        }

        .footer-subtitle {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ffeb3b;
        }

        .footer-text {
          margin: 0.2rem 0;
          line-height: 1.6;
        }

        /* Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin: 0.3rem 0;
        }

        .footer-links a {
          text-decoration: none;
          color: #fff;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffd700;
          transform: translateX(3px);
        }

        /* Social Media Icons */
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .footer-social a {
          color: #fff;
          font-size: 1.5rem;
          background: rgba(255,255,255,0.1);
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .footer-social a:hover {
          background: #ffd700;
          color: #182848;
          transform: scale(1.2);
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.85rem;
          color: #ccc;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 1rem;
        }

        /* Responsive */
        @media(max-width: 992px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-section {
            min-width: unset;
          }

          .footer-social {
            justify-content: center;
          }
        }

        @media(max-width: 480px) {
          .footer {
            padding: 2rem 1rem 1rem;
          }

          .footer-title {
            font-size: 1.3rem;
          }

          .footer-subtitle {
            font-size: 1rem;
          }

          .footer-social a {
            font-size: 1.2rem;
            padding: 0.4rem;
          }
        }

        /* Sticky Footer */
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        #root {
          flex: 1;
        }
      `}</style>
    </>
  );
}
