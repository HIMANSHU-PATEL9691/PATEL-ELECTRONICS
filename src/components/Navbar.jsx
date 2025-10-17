// import { Link, NavLink } from 'react-router-dom';
// import { useCart } from '../context/CartContext.jsx';
// import { useState } from 'react';
// // Removing the separate CSS import, keeping inline for simplicity here
// // import './Navbar.css'; 

// export default function Navbar() {
//   const { items } = useCart();
//   // Using a more robust count calculation in case 'qty' is missing or 0
//   const count = items.reduce((n, i) => n + (i.qty || 0), 0); 
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Function to close the menu
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="container">
//           <Link to="/" className="brand" onClick={closeMenu}>
//             <span role="img" aria-label="Electronics icon">⚡</span> Patel Electronics
//           </Link>
          
//           {/* Enhanced Hamburger for mobile with an 'open' class for animation */}
//           <button 
//             className={`hamburger ${menuOpen ? 'open' : ''}`} 
//             onClick={() => setMenuOpen(prev => !prev)}
//             aria-label="Toggle navigation menu"
//             aria-expanded={menuOpen}
//           >
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </button>

//           <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             {/* The NavLinks now all call closeMenu on click */}
//             <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
//             <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Products</NavLink>
//             <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink>
//             <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Gallery</NavLink>
//             <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink>
//             <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
            
//             {/* Cart Link with Count Badge */}
//             <NavLink to="/cart" className={({ isActive }) => isActive ? 'active cart-link' : 'cart-link'} onClick={closeMenu}>
//               <span className="cart-icon" role="img" aria-label="Shopping Cart">🛒</span> 
//               Cart 
//               {count > 0 && <span className="cart-badge">{count}</span>}
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       {/* Enhanced Styling */}
//       <style>{`
//         /* Global Reset for Clarity */
//         .navbar a, .navbar button {
//           font-family: 'Inter', sans-serif; /* Using a more modern font */
//           box-sizing: border-box;
//         }

//         /* --- Navbar Base --- */
//         .navbar {
//           background: #ffffff; /* Light background for a modern feel */
//           border-bottom: 3px solid #f0f0f0; /* Subtle separator */
//           padding: 0.8rem 1.5rem;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//           position: sticky;
//           top: 0;
//           z-index: 100;
//         }

//         .navbar .container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           max-width: 1300px; /* Slightly wider container */
//           margin: 0 auto;
//         }

//         .brand {
//           color: #1a202c; /* Darker text */
//           font-weight: 800;
//           font-size: 1.6rem;
//           text-decoration: none;
//           letter-spacing: -0.5px;
//           display: flex;
//           align-items: center;
//         }
//         .brand span { margin-right: 8px; font-size: 1.8rem; color: #4299e1; /* Blue accent */ }
//         .brand:hover { color: #4299e1; } /* Blue hover */

//         /* --- Navigation Links --- */
//         .nav-links {
//           display: flex;
//           gap: 1.6rem;
//           align-items: center;
//         }
//         .nav-links a {
//           color: #4a5568; /* Greyish link color */
//           text-decoration: none;
//           font-weight: 600;
//           position: relative;
//           padding: 0.5rem 0;
//           transition: color 0.3s ease;
//         }
//         .nav-links a:hover { color: #4299e1; } 
        
//         /* Active link indicator is now a smooth transition bar */
//         .nav-links a::after {
//           content: '';
//           position: absolute;
//           width: 0;
//           height: 3px;
//           background: #4299e1;
//           bottom: -4px;
//           left: 50%;
//           transform: translateX(-50%);
//           transition: width 0.3s ease;
//           border-radius: 2px;
//         }
//         .nav-links a.active { color: #4299e1; }
//         .nav-links a.active::after { width: 100%; }

//         /* --- Cart Link and Badge --- */
//         .cart-link {
//           background: #4299e1; /* Primary blue button */
//           color: #ffffff !important;
//           padding: 0.4rem 1rem;
//           border-radius: 8px; /* Rounded corners */
//           font-weight: 700;
//           display: flex;
//           align-items: center;
//           transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
//         }
//         .cart-link:hover {
//           background: #3182ce; /* Darker blue on hover */
//           transform: translateY(-1px);
//           box-shadow: 0 4px 10px rgba(66, 153, 225, 0.4);
//         }
//         .cart-link .cart-icon { margin-right: 5px; font-size: 1.1rem; }
        
//         .cart-link::after { content: none !important; } /* Remove link bar from cart link */
        
//         /* Count Badge */
//         .cart-badge {
//           background-color: #f56565; /* Red for high visibility */
//           color: white;
//           border-radius: 50%;
//           padding: 2px 7px;
//           font-size: 0.75rem;
//           font-weight: 700;
//           margin-left: 8px;
//           line-height: 1;
//           animation: pulse 1s infinite; /* Added a subtle pulsing animation */
//         }

//         @keyframes pulse {
//           0% { box-shadow: 0 0 0 0 rgba(245, 101, 101, 0.7); }
//           70% { box-shadow: 0 0 0 5px rgba(245, 101, 101, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(245, 101, 101, 0); }
//         }

//         /* --- Hamburger Menu --- */
//         .hamburger {
//           display: none;
//           flex-direction: column;
//           justify-content: space-around;
//           width: 30px;
//           height: 25px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           padding: 0;
//           z-index: 101; /* Ensure it's above the links */
//         }
//         .hamburger:focus { outline: none; }
        
//         .hamburger .bar {
//           width: 100%;
//           height: 3px;
//           background: #4a5568;
//           border-radius: 2px;
//           transition: all 0.3s linear;
//           transform-origin: 1px;
//         }

//         /* Hamburger Animation */
//         .hamburger.open .bar:nth-child(1) {
//           transform: rotate(45deg) translate(5px, 5px);
//         }
//         .hamburger.open .bar:nth-child(2) {
//           opacity: 0;
//           transform: translateX(-20px);
//         }
//         .hamburger.open .bar:nth-child(3) {
//           transform: rotate(-45deg) translate(5px, -5px);
//         }

//         /* --- Responsive Mobile View --- */
//         @media(max-width: 900px) { /* Changed breakpoint to be more inclusive of tablets */
//           .hamburger { display: flex; }

//           .nav-links {
//             position: fixed; /* Use fixed for better covering on mobile */
//             top: 70px; /* Adjust based on navbar height */
//             right: 0;
//             background: #ffffff;
//             flex-direction: column;
//             width: 100%;
//             height: calc(100vh - 70px);
//             padding: 1.5rem 0;
//             gap: 0;
//             transform: translateX(100%);
//             transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother animation */
//             box-shadow: -2px 0 10px rgba(0,0,0,0.1);
//             overflow-y: auto;
//             align-items: flex-start;
//           }
//           .nav-links.open { 
//             transform: translateX(0); 
//           }
          
//           .nav-links a { 
//             width: 100%;
//             padding: 1rem 1.5rem;
//             border-bottom: 1px solid #f0f0f0;
//             color: #1a202c; /* Darker links in the menu */
//             font-size: 1.1rem;
//             font-weight: 500;
//           }
          
//           .nav-links a:hover {
//             background-color: #f7fafc;
//           }
          
//           /* Remove the underline on mobile links */
//           .nav-links a::after { content: none; } 
          
//           .nav-links a.active {
//             background-color: #ebf8ff; /* Light blue background for active */
//             border-left: 4px solid #4299e1;
//             padding-left: calc(1.5rem - 4px);
//           }

//           /* Adjust cart link for mobile */
//           .cart-link {
//             width: calc(100% - 3rem);
//             margin: 1.5rem;
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useState } from 'react';

export default function Navbar() {
  const { items } = useCart();
  const count = items.reduce((n, i) => n + (i.qty || 0), 0); 
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="brand" onClick={closeMenu}>
            <span role="img" aria-label="Electronics icon">⚡</span> Patel Electronics
          </Link>

          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`} 
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Products</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Gallery</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
              <span className="cart-icon" role="img" aria-label="Shopping Cart">🛒</span>
              Cart {count > 0 && <span className="cart-badge">{count}</span>}
            </NavLink>
          </div>
        </div>
      </nav>

      <style>{`
        /* --- Navbar Base --- */
        .navbar {
          background: #fff;
          padding: 0.8rem 1.5rem;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .navbar .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
        }
        .brand {
          color: #1a202c;
          font-weight: 800;
          font-size: 1.6rem;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .brand span {
          margin-right: 8px;
          font-size: 1.8rem;
          color: #4299e1;
        }

        /* --- Navigation Links --- */
        .nav-links {
          display: flex;
          gap: 1.6rem;
          align-items: center;
        }
        .nav-links a {
          color: #4a5568;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }
        .nav-links a:hover { color: #4299e1; }
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          background: #4299e1;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-links a.active::after { width: 100%; }

        /* --- Cart Link & Badge --- */
        .cart-link {
          background: #4299e1;
          color: #fff !important;
          padding: 0.4rem 1rem;
          border-radius: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .cart-link:hover {
          background: #3182ce;
          transform: translateY(-1px);
        }
        .cart-icon { margin-right: 5px; font-size: 1.1rem; }
        .cart-badge {
          background: #f56565;
          color: #fff;
          border-radius: 50%;
          padding: 2px 7px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-left: 8px;
          line-height: 1;
          animation: pulse 1.2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(245,101,101,0.7); }
          70% { box-shadow: 0 0 0 5px rgba(245,101,101,0); }
          100% { box-shadow: 0 0 0 0 rgba(245,101,101,0); }
        }

        /* --- Hamburger Menu --- */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 25px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .hamburger .bar {
          width: 100%;
          height: 3px;
          background: #4a5568;
          border-radius: 2px;
          transition: all 0.3s linear;
        }
        .hamburger.open .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .hamburger.open .bar:nth-child(2) { opacity: 0; }
        .hamburger.open .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* --- Responsive Mobile View --- */
        @media(max-width: 900px) {
          .hamburger { display: flex; }
          .nav-links {
            position: fixed;
            top: 70px;
            right: 0;
            background: #fff;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 70px);
            padding-top: 1rem;
            gap: 0;
            transform: translateX(100%);
            transition: transform 0.4s ease;
            overflow-y: auto;
            align-items: flex-start;
          }
          .nav-links.open { transform: translateX(0); }
          .nav-links a {
            width: 100%;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #f0f0f0;
            color: #1a202c;
          }
          .nav-links a.active {
            background: #ebf8ff;
            border-left: 4px solid #4299e1;
            padding-left: calc(1.5rem - 4px);
          }
          .cart-link {
            width: calc(100% - 3rem);
            margin: 1.5rem;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
