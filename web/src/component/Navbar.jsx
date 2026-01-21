import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black bg-opacity-90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-xl sm:text-2xl font-bold text-yellow-600 relative z-50">
            El Pie Castillo
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-yellow-600 transition text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#menu"
              className="text-white hover:text-yellow-600 transition text-sm font-medium"
            >
              Menú
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-yellow-600 transition text-sm font-medium"
            >
              Galería
            </a>
            <a
              href="#reservation"
              className="text-white hover:text-yellow-600 transition text-sm font-medium"
            >
              Reservas
            </a>
            <a
              href="#contact"
              className="text-white hover:text-yellow-600 transition text-sm font-medium"
            >
              Contacto
            </a>
          </div>

          <div className="hidden lg:block">
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur transition hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú"
          >
            <span className="sr-only">Abrir menú principal</span>
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: 0 }}
      >
        <div
          className={`flex flex-col items-center justify-center h-full space-y-8 transition-all duration-500 ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-white hover:text-yellow-600 transition text-2xl font-medium"
          >
            Inicio
          </a>
          <a
            href="#menu"
            onClick={handleLinkClick}
            className="text-white hover:text-yellow-600 transition text-2xl font-medium"
          >
            Menú
          </a>
          <a
            href="#gallery"
            onClick={handleLinkClick}
            className="text-white hover:text-yellow-600 transition text-2xl font-medium"
          >
            Galería
          </a>
          <a
            href="#reservation"
            onClick={handleLinkClick}
            className="text-white hover:text-yellow-600 transition text-2xl font-medium"
          >
            Reservas
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="text-white hover:text-yellow-600 transition text-2xl font-medium"
          >
            Contacto
          </a>

          <div className="pt-8">
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
