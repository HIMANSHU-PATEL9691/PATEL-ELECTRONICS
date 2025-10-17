import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import RoutesView from './routes.jsx';
import WhatsAppChat from './components/WhatsAppChat.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Automatically scroll to top on route change */}
      <RoutesView />
      <WhatsAppChat phone="+919691365052" message="Namaste! Repair/Accessories ke liye madad chahiye." />
      <Footer />
    </>
  );
}
