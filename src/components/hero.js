import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = [
    "/images/candies33.png",
    "/images/candies1.png",
    "/images/candies3.jpg",
  ];

  const features = [
    { icon: "⭐", text: "100% Mexicanos" },
    { icon: "❤️", text: "Hechos con Amor" },
    { icon: "🚚", text: "Envío a todo el país" },
  ];

  // Auto slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNavigation = (direction) => {
    setIsAutoPlaying(false);

    setCurrentImage((prev) => {
      if (direction === "next") return (prev + 1) % heroImages.length;
      if (direction === "prev")
        return (prev - 1 + heroImages.length) % heroImages.length;
    });

    setTimeout(() => setIsAutoPlaying(true), 9000);
  };

  const handleIndicatorClick = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 9000);
  };

  return (
    <section className="hero">
      {/* --- Background Slideshow --- */}
      <div className="hero__background">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className={`hero__image-slide ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        ))}

        <div className="hero__overlay"></div>
      </div>

      {/* --- Hero Content --- */}
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="hero__subtitle">🎉 Bienvenido a</span>

          <h1 className="hero__title">
            <span className="hero__title-main">DULCESMEX</span>
            <span className="hero__title-accent">MEXICAN GOODIES</span>
          </h1>

          <p className="hero__description">
            Auténticos dulces mexicanos que han endulzado generaciones.  
            <span> 💕</span>
          </p>

          {/* Features */}
          <div className="hero__features">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="hero__feature"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <span className="feature__icon">{f.icon}</span>
                <span className="feature__text">{f.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__cta-container">
            <button className="hero__cta hero__cta--primary">🛒 Comprar Ahora</button>
            <button className="hero__cta hero__cta--secondary">📖 Nuestra Historia</button>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {[
              
              { num: "30+", label: "Productos" },
              { num: "4+", label: "Años de Experiencia" },
            ].map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="stat__number">{s.num}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="hero__social">
            <span className="social__label">Síguenos:</span>

            <div className="hero__social-icons">
              {[
                { icon: "📷", text: "Instagram" },
                { icon: "👥", text: "Facebook" },
                { icon: "🎵", text: "TikTok" },
              ].map((s, i) => (
                <a key={i} href="#" className="social__link">
                  <span className="social__icon">{s.icon}</span>
                  <span className="social__text">{s.text}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Product Image */}
        <motion.div
          className="hero__featured-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image__container">
            <img
              src=""
              alt=""
              className="featured-img"
            />
         
            {/* Badges */}
            <div className="hero__badges">
              <div className="hero__badge badge--primary">⭐ ¡Hecho en México!</div>
              <div className="hero__badge badge--secondary">🏆 Calidad Premium</div>
              <div className="hero__badge badge--tertiary">🚚 Envíos Nacionales</div>
            </div>

            {/* Floating Emojis */}
            <div className="floating-elements">
              <div className="floating-element element-1">🍬</div>
              <div className="floating-element element-2">⭐</div>
              <div className="floating-element element-3">💖</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slideshow Controls */}
      <button
        className="hero__nav hero__nav--prev"
        onClick={() => handleNavigation("prev")}
      >
        ‹
      </button>

      <button
        className="hero__nav hero__nav--next"
        onClick={() => handleNavigation("next")}
      >
        ›
      </button>

      {/* Indicators */}
      <div className="hero__indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero__indicator ${index === currentImage ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      {/* Decorative Waves */}
      <div className="hero__waves">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..."
            opacity=".25"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
