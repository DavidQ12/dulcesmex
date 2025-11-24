import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./UI/card";
import "./nosotros.css";

export default function Nosotros() {
  const valores = [
    { titulo: "Calidad Garantizada", desc: "Cada dulce es seleccionado cuidadosamente para ofrecerte lo mejor." },
    { titulo: "Pasión por lo Tradicional", desc: "Preservamos recetas auténticas que representan la dulcería mexicana." },
    { titulo: "Atención Humana", desc: "Creemos en el servicio cercano, real y hecho con corazón." },
  ];

  return (
    <div className="nosotros-container">
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
          className="nosotros-title"
        >
          Sobre Nosotros
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="nosotros-subtitle"
        >
          En <span className="nosotros-highlight">DulcesMex</span>, celebramos el sabor, la cultura y la tradición mexicana.
          Somos un equipo apasionado por compartir dulces.
        </motion.p>
      </section>

      {/* MISIÓN - VISIÓN */}
      <section className="nosotros-mission-vision">
        <div className="mission-vision-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mission-card"
          >
            <h2 className="mission-title">Nuestra Misión</h2>
            <p className="mission-text">
              Brindar dulces mexicanos auténticos y de alta calidad, acompañados de una experiencia de compra única
              que conecte a nuestros clientes con las raíces mexicanas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="vision-card"
          >
            <h2 className="vision-title">Nuestra Visión</h2>
            <p className="vision-text">
              Convertirnos en la tienda digital líder en dulcería mexicana, llevando el sabor tradicional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="nosotros-values">
        <h2 className="values-title">
          Nuestros Valores
        </h2>

        <div className="values-grid">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="value-card">
                <CardContent>
                  <h3 className="value-title">{v.titulo}</h3>
                  <p className="value-description">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nosotros-footer">
        © {new Date().getFullYear()} DulcesMex — Tradición que endulza el alma.
      </footer>
    </div>
  );
}