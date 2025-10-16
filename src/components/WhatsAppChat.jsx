export default function WhatsAppChat({ phone, message }) {
  const encoded = encodeURIComponent(message || 'Hello');
  const href = `https://wa.me/${phone.replace(/\D/g,'')}?text=${encoded}`;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon (SVG) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="white"
      >
        <path d="M20.52 3.48A11.914 11.914 0 0012 .01C5.373.01.01 5.37.01 12c0 2.11.55 4.07 1.52 5.8L0 24l6.4-1.68A11.958 11.958 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.52 18c-1.97 0-3.86-.53-5.52-1.52l-.4-.24-3.8 1 1-3.72-.26-.42C2.5 15.86 2 13.97 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.4-7.6c-.3-.15-1.76-.87-2.04-.97s-.47-.15-.67.15-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.48-1.76-1.65-2.06s-.02-.45.13-.6c.13-.13.3-.35.45-.52.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.07-.15-.67-1.63-.92-2.24-.24-.59-.5-.51-.67-.52-.17-.02-.37-.02-.57-.02s-.52.07-.8.37c-.28.3-1.08 1.06-1.08 2.58s1.11 3 1.27 3.22c.17.22 2.2 3.37 5.33 4.72 3.13 1.35 3.13.9 3.68.85.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.42-.08-.12-.3-.2-.6-.35z"/>
      </svg>

      <style>{`
        .whatsapp-btn {
          position: fixed;
          right: 16px;
          bottom: 16px;
          width: 80px;
          height: 80px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 1000;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        @media(max-width: 768px) {
          .whatsapp-btn {
            width: 50px;
            height: 50px;
            right: 12px;
            bottom: 12px;
          }
        }

        @media(max-width: 480px) {
          .whatsapp-btn {
            width: 44px;
            height: 44px;
            right: 10px;
            bottom: 10px;
          }
        }
      `}</style>
    </a>
  );
}
