import React from "react";
import { motion } from "framer-motion";
import "./contacto.css";

export default function Contacto() {
  const redesSociales = [
    {
      nombre: "WhatsApp",
      usuario: "+503 6163 2540",
      icono: "📱",
      enlace: "https://wa.me/50361632540",
      color: "#25D366",
      desc: "Escríbenos para pedidos personalizados"
    },
    {
      nombre: "Instagram",
      usuario: "@noel_97_h",
      icono: "📷",
      enlace: "https://www.instagram.com/noel_97_h/?utm_source=ig_web_button_share_sheet",
      color: "#E4405F",
      desc: "Síguenos para ver nuestros productos"
    },
    {
      nombre: "Facebook",
      usuario: "DulcesMex Oficial",
      icono: "👥",
      enlace: "https://www.facebook.com/share/1BsWGgRTH5/",
      color: "#1877F2",
      desc: "Conéctate con nuestra comunidad"
    },
   
  ];

  const handleRedSocialClick = (enlace) => {
    window.open(enlace, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white font-sans contacto-container">
      
      {/* Elementos decorativos */}
      <div className="floating-elements">
        <div className="floating-element">💬</div>
        <div className="floating-element">📞</div>
        <div className="floating-element">❤️</div>
      </div>
      
      <div className="decorative-corner corner-top-left"></div>
      <div className="decorative-corner corner-bottom-right"></div>

      {/* HEADER */}
      <section className="contacto-header">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contacto-title"
        >
          Contáctanos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="contacto-subtitle"
        >
          Estamos aquí para endulzar tu día. ¡Síguenos en nuestras redes sociales!
        </motion.p>
      </section>

      {/* REDES SOCIALES */}
      <section className="redes-section">
        <div className="redes-grid">
          {redesSociales.map((red, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="red-social-card"
              onClick={() => handleRedSocialClick(red.enlace)}
              style={{ '--color-red': red.color }}
            >
              <div className="red-icon-container">
                <span className="red-icon">{red.icono}</span>
              </div>
              
              <div className="red-content">
                <h3 className="red-nombre">{red.nombre}</h3>
                <p className="red-usuario">{red.usuario}</p>
                <p className="red-desc">{red.desc}</p>
              </div>

              <div className="red-arrow">
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN DE CONTACTO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="info-contacto"
      >
        <div className="info-grid">
          <div className="info-item">
            <span className="info-icon">🕒</span>
            <div className="info-text">
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 9:00 AM - 8:00 PM</p>
              <p>Sábados: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon">🚚</span>
            <div className="info-text">
              <h4>Envíos</h4>
              <p>Todo El Salvador: 2-5 días hábiles</p>
              <p>San Miguel: Entrega el mismo día</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="contacto-footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} DulcesMex — Siempre cerca de ti.
          </p>
          <div className="footer-cta">
            <p className="cta-text">¿Listo para endulzar tu vida?</p>
            <button 
              className="cta-button"
              onClick={() => handleRedSocialClick('https://wa.me/50361632540')}
            >
              🛒 Ordenar Ahora
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}