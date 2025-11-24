import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const cartItemsCount = 3; // Ejemplo con items en el carrito

  const navItems = [
    { label: "Inicio", href: "/", icon: "🏠" },
    { label: "Categorías", href: "/categorias", icon: "📦" },
    { label: "Productos", href: "/productos", icon: "🍬" },
    { label: "Nosotros", href: "/nosotros", icon: "❤️" },
    { label: "Contacto", href: "/contacto", icon: "📞" }
  ];

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto para cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    // Aquí puedes integrar la lógica para abrir el carrito
    console.log("Abrir carrito");
    // Ejemplo: abrirModalCarrito();
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} aria-label="Menú principal">
      <div className="navbar__container">
        
        {/* Logo con diseño mejorado */}
        <a href="/" className="navbar__logo" onClick={() => handleNavClick("/")}>
          <span className="logo__icon"></span>
          <span className="logo__text">DULCESMEX</span>
          
        </a>

        {/* Botón menú móvil */}
        <button
          className={`navbar__toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menú de navegación"
        >
          <span className="toggle__line"></span>
          <span className="toggle__line"></span>
          <span className="toggle__line"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`navbar__menu ${isMenuOpen ? "active" : ""}`}>
          
          {/* Lista de enlaces */}
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.href} className="navbar__item">
                <a
                  href={item.href}
                  className={`navbar__link ${activeLink === item.href ? "active" : ""}`}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={activeLink === item.href ? "page" : undefined}
                >
                  <span className="nav-link__icon">{item.icon}</span>
                  <span className="nav-link__text">{item.label}</span>
                  <span className="nav-link__underline"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Acciones de usuario */}
          <div className="navbar__actions">
            
            {/* Botón de búsqueda */}
            <button 
              className="navbar__action-btn"
              aria-label="Buscar productos"
            >
              <span className="action-btn__icon">🔍</span>
            </button>

            {/* Botón de usuario */}
            <button 
              className="navbar__action-btn"
              aria-label="Mi cuenta"
            >
              <span className="action-btn__icon">👤</span>
            </button>

            {/* Botón Carrito con contador */}
            <button 
              className="navbar__cart"
              onClick={handleCartClick}
              aria-label={`Carrito de compras con ${cartItemsCount} items`}
            >
              <span className="cart__icon">🛒</span>
              <span className="cart__text">Carrito</span>
              {cartItemsCount > 0 && (
                <span className="navbar__cart-count" aria-live="polite">
                  {cartItemsCount}
                </span>
              )}
            </button>

          </div>
        </div>

        {/* Overlay para móvil */}
        {isMenuOpen && (
          <div 
            className="navbar__overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;