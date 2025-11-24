import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./UI/card";
import "./categorias.css";

export default function Categorias() {
  const categorias = [
    {
      nombre: "Dulces Tradicionales",
      desc: "Mazapán, obleas, cocadas y más tesoros de la dulcería mexicana.",
      img: "https://tvazteca.brightspotcdn.com/43/f8/63c94cfb4abfb7c311cfe37d415d/dulce-patria-los-dulces-tipicos-mexicanos.jpg",
      productos: "25+ productos"
    },
    {
      nombre: "Dulces Picositos",
      desc: "Delicias con chile, tamarindo y sabores intensos.",
      img: "https://acdn-us.mitiendanube.com/stores/002/134/351/products/1001285667-f8db41f679398be57d17435463576693-480-0.webp",
      productos: "18+ productos"
    },
    {
      nombre: "Caramelos y Gomitas",
      desc: "Texturas suaves y dulces perfectas para cualquier ocasión.",
      img: "https://sinofudetechnology.com/wp-content/uploads/2024/11/f-2.png",
      productos: "32+ productos"
    },
    {
      nombre: "Caja de Regalo",
      desc: "Paquetes especiales perfectos para obsequiar.",
      img: "https://i.etsystatic.com/25038586/r/il/1323cc/6349757743/il_fullxfull.6349757743_mzv1.jpg",
      productos: "12+ productos"
    },
    {
      nombre: "Dulces Artesanales",
      desc: "Productos hechos a mano por artesanos mexicanos.",
      img: "https://images.inmexico.com/2016/08/assorted-candy-2.jpg",
      productos: "15+ productos"
    },
    {
      nombre: "Snacks y Botanas",
      desc: "Chips, cacahuates y botanas clásicas mexicanas.",
      img: "https://www.twopeasandtheirpod.com/wp-content/uploads/2017/09/Sweet-and-Salty-Snack-Board-3.jpg",
      productos: "22+ productos"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 font-sans categorias-container">
      
      {/* Elementos decorativos */}
      <div className="floating-elements">
        <div className="floating-element">🍬</div>
        <div className="floating-element">⭐</div>
        <div className="floating-element">💖</div>
        <div className="floating-element">🇲🇽</div>
      </div>
      
      <div className="decorative-corner corner-top-left"></div>
      <div className="decorative-corner corner-bottom-right"></div>

      {/* HEADER */}
      <section className="categorias-header">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="categorias-title"
        >
          Categorías de Productos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="categorias-subtitle"
        >
          Encuentra tus dulces favoritos fácilmente según su tipo. 
          Descubre la auténtica dulcería mexicana organizada para ti.
        </motion.p>
      </section>

      {/* ESTADÍSTICAS */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="categorias-stats"
      >
        <div className="categoria-stat">
          <span className="stat-number">6</span>
          <span className="stat-label">Categorías</span>
        </div>
        <div className="categoria-stat">
          <span className="stat-number">30+</span>
          <span className="stat-label">Productos</span>
        </div>
        <div className="categoria-stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Mexicanos</span>
        </div>
       
      </motion.div>

      {/* GRID DE CATEGORÍAS */}
      <div className="categorias-grid">
        {categorias.map((categoria, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="categoria-item"
          >
            <Card className="categoria-card">
              {/* Contenedor de imagen con overlay */}
              <div className="categoria-image-container">
                <img
                  src={categoria.img}
                  alt={categoria.nombre}
                  className="categoria-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x250/5D4037/FFF9F0?text=Imagen+No+Disponible";
                  }}
                />
                <div className="categoria-overlay">
                  <span className="categoria-badge">{categoria.productos}</span>
                </div>
              </div>

              <CardContent className="categoria-content">
                <h3 className="categoria-nombre">{categoria.nombre}</h3>
                <p className="categoria-desc">{categoria.desc}</p>

                <button className="categoria-btn">
                  <span className="btn-icon">🔍</span>
                  Explorar Categoría
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="categorias-footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} DulcesMex — Categorías llenas de tradición.
          </p>
          <div className="footer-social">
            <span className="social-text">Síguenos:</span>
            <div className="social-icons">
              <span className="social-icon">📷</span>
              <span className="social-icon">👥</span>
              <span className="social-icon">🎵</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}