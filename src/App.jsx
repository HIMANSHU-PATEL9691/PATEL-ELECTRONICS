import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import RoutesView from './routes.jsx'
import WhatsAppChat from './components/WhatsAppChat.jsx'
// import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <RoutesView />
      <WhatsAppChat phone="+919691365052" message="Namaste! Repair/Accessories ke liye madad chahiye." />
      <Footer />
    </>
  )
}
