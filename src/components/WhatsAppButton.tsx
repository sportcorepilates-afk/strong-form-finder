import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const { pathname } = useLocation();

  if (pathname === "/start-here") return null;

  return (
    <a
      href="https://wa.me/919930441143?text=Hi%2C%20I%20need%20help"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-14 h-14"
      >
        <circle cx="24" cy="24" r="24" fill="#25D366" />
        <path
          d="M24 12.2c-6.5 0-11.8 5.3-11.8 11.8 0 2.1.6 4.1 1.6 5.8l-1.7 6.2 6.4-1.7c1.6.9 3.5 1.4 5.5 1.4 6.5 0 11.8-5.3 11.8-11.8S30.5 12.2 24 12.2zm5.8 16.3c-.2.7-1.4 1.3-1.9 1.4-.5.1-1.1.2-3.5-.7-3.1-1.2-5.1-4.4-5.2-4.6-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.1.1.3 0 .5s-.2.3-.3.5c-.2.2-.3.3-.5.5-.2.2-.4.3-.2.7.2.3 1 1.7 2.2 2.7 1.5 1.3 2.7 1.7 3.1 1.9.3.2.5.1.7-.1.2-.2.8-1 1.1-1.3.2-.3.5-.3.8-.2.3.1 1.8.9 2.1 1 .3.2.5.2.6.4.1.1.1.7-.1 1.3z"
          fill="#fff"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
