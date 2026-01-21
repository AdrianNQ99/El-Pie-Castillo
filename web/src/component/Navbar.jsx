import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-black bg-opacity-80 backdrop-blur shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-yellow-600">
          El Pie Castillo
        </a>
        <div className="space-x-6">
          <a
            href="#home"
            className="text-white hover:text-yellow-600 transition"
          >
            Inicio
          </a>
          <a
            href="#menu"
            className="text-white hover:text-yellow-600 transition"
          >
            Menú
          </a>
          <a
            href="#reservation"
            className="text-white hover:text-yellow-600 transition"
          >
            Reservas
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-600 transition"
          >
            Contacto
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <FaWhatsapp className="text-lg" aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
