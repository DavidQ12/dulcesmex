import React from "react";
import { motion } from "framer-motion";
import "./nosotros.css";

export default function Nosotros() {
  const valores = [
    { 
      titulo: "Calidad Garantizada", 
      desc: "Cada dulce es seleccionado cuidadosamente para ofrecerte lo mejor.",
      icon: "⭐"
    },
    { 
      titulo: "Pasión por lo Tradicional", 
      desc: "Preservamos recetas auténticas que representan la dulcería mexicana.",
      icon: "❤️"
    },
    { 
      titulo: "Atención Humana", 
      desc: "Creemos en el servicio cercano, real y hecho con corazón.",
      icon: "🤝"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white font-sans nosotros-container">
      {/* Elementos decorativos flotantes */}
      <div className="floating-elements">
        <div className="floating-element">🍬</div>
        <div className="floating-element">⭐</div>
        <div className="floating-element">💖</div>
      </div>
      
      {/* Esquinas decorativas */}
      <div className="decorative-corner corner-top-left"></div>
      <div className="decorative-corner corner-bottom-right"></div>

      {/* HERO */}
      <section className="nosotros-hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="nosotros-hero-title"
        >
          Nuestra Historia
        </motion.h1>
      </section>

      {/* HISTORIA */}
      <section className="nosotros-historia-section">
        <div className="nosotros-historia-content">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="historia-image"
          >
            <img 
              src="" 
              alt="Historia de DulcesMex"
              className="historia-main-image"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="historia-text"
          >
            <p className="historia-description">
              Desde 2020, DulcesMex nació del sueño de compartir la auténtica dulcería mexicana con el mundo. 
              hoy se ha convertido en una marca 
              reconocida por su compromiso con la calidad y la tradición.
            </p>
            <p className="historia-description">
              Cada dulce que lleva consigo el corazón de México.
            </p>
            <div className="historia-logros">
              <div className="historia-logro">
                <span className="logro-icon"></span>
                <span className="logro-text"></span>
              </div>
              <div className="historia-logro">
                <span className="logro-icon">🌎</span>
                <span className="logro-text">Envíos a todo el país</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="mision-vision-section">
        <div className="mision-vision-grid">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mision-card"
          >
            <div className="card-header">
              <span className="card-icon">🎯</span>
              <h2 className="card-title">Nuestra Misión</h2>
            </div>
            <p className="card-text">
              Brindar dulces mexicanos auténticos y de alta calidad, acompañados de una experiencia de compra única 
              que conecte a nuestros clientes con las raíces mexicanas.
            </p>
            <img 
              src="https://i.pinimg.com/236x/75/78/90/757890ad5d6425181aaec8d6e4ab0714.jpg" 
              alt="Misión DulcesMex"
              className="card-image"
            />
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="vision-card"
          >
            <div className="card-header">
              <span className="card-icon">🔭</span>
              <h2 className="card-title">Nuestra Visión</h2>
            </div>
            <p className="card-text">
              llevando el sabor tradicional mexicano
              a todo el pais.
            </p>
            <img 
              src="" 
              alt="Visión DulcesMex"
              className="card-image"
            />
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="valores-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="valores-title"
        >
          Nuestros Valores
        </motion.h2>

        <div className="valores-grid">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="valor-card"
            >
              <div className="valor-icon-container">
                <span className="valor-icon">{valor.icon}</span>
              </div>
              <div className="valor-content">
                <h3 className="valor-titulo">{valor.titulo}</h3>
                <p className="valor-desc">{valor.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nosotros-footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} DulcesMex — Tradición que endulza el alma.
          </p>
        </div>
      </footer>
    </div>
  );
}