import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./UI/card";
import "./productos.css"
export default function Productos() {
  const productos = [
    {
      nombre: "Mazapán Tradicional",
      desc: "El clásico que nunca falla. Suave, dulce y lleno del sabor mexicano.",
      precio: "$1.50",
      img: "https://www.isabeleats.com/wp-content/uploads/2023/07/mazapan-small-8.jpg",
      categoria: "Tradicional",
      isNuevo: true
    },
    {
      nombre: "Pulparindo",
      desc: "Sabor intenso y picosito, ideal para los amantes del tamarindo.",
      precio: "$0.75",
      img: "https://cdn11.bigcommerce.com/s-k2eyh8/images/stencil/original/image-manager/mexican-candy-de-la-rosa-pulparindo-75475.jpg",
      categoria: "Picante",
      isPopular: true
    },
    {
      nombre: "Glorias de Leche Quemada",
      desc: "Dulces artesanales hechos con leche y nuez. Una joya tradicional.",
      precio: "$2.00",
      img: "https://gourmetdemexico.com.mx/wp-content/uploads/2022/04/glorias-las-sevillanas.jpeg",
      categoria: "Premium"
    },
    {
      nombre: "Obleas con Cajeta",
      desc: "Un equilibrio perfecto entre lo crujiente y lo dulce.",
      precio: "$1.25",
      img: "https://dulces.mx/wp-content/uploads/2019/12/Oblea-coronado-mexico.jpg",
      categoria: "Clásico"
    },
    {
      nombre: "Alegrías de Amaranto",
      desc: "Crujientes y nutritivas, endulzadas con miel de abeja.",
      precio: "$1.80",
      img: "https://laroussecocina.mx/wp-content/uploads/2020/08/shutterstock-1337625734.jpg",
      categoria: "Saludable"
    },
    {
      nombre: "Cocadas Artesanales",
      desc: "Suaves y esponjosas, hechas con coco fresco y canela.",
      precio: "$1.95",
      img: "https://www.lareposterita.com.ec/wp-content/uploads/2023/12/Cocadas-2.webp",
      categoria: "Tropical",
      isNuevo: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-black text-white pt-28 pb-20 font-sans productos-container">
      {/* Elementos decorativos */}
      <div className="floating-elements">
        <div className="floating-element">🍬</div>
        <div className="floating-element">⭐</div>
        <div className="floating-element">💖</div>
      </div>

      <section className="max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold productos-title"
        >
          Nuestros Productos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-zinc-300 max-w-2xl mx-auto productos-subtitle"
        >
          Auténticos dulces mexicanos seleccionados especialmente para ti. 
          Cada bocado es una experiencia de sabor tradicional.
        </motion.p>
      </section>

      {/* GRID DE PRODUCTOS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 productos-grid">
        {productos.map((producto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="producto-item"
          >
            <Card className="producto-card">
              {/* Contenedor de imagen circular */}
              <div className="producto-image-container">
                <img
                  src={producto.img}
                  alt={producto.nombre}
                  className="producto-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200x200/5D4037/FFF9F0?text=Imagen+No+Disponible";
                  }}
                />
                
                {/* Badges */}
                <div className="producto-badges">
                  {producto.isNuevo && (
                    <span className="badge badge-nuevo">Nuevo</span>
                  )}
                  {producto.isPopular && (
                    <span className="badge badge-popular">Popular</span>
                  )}
                  <span className="badge badge-categoria">{producto.categoria}</span>
                </div>

                {/* Overlay de acciones */}
                <div className="producto-overlay">
                  <button className="overlay-btn overlay-btn-primary">
                    🛒 Agregar
                  </button>
                  <button className="overlay-btn overlay-btn-secondary">
                    👁️ Ver
                  </button>
                </div>
              </div>

              <CardContent className="producto-content">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-desc">{producto.desc}</p>

                <div className="producto-precio-container">
                  <span className="producto-precio">{producto.precio}</span>
                  <span className="producto-unidad">c/u</span>
                </div>

                <div className="producto-actions">
                  <button className="btn-agregar-carrito">
                    <span className="btn-icon">🛒</span>
                    Agregar al Carrito
                  </button>
                  <button className="btn-favorito">
                    ♥
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center mt-20 productos-cta"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 cta-title">
          ¿No encuentras tu dulce favorito?
        </h2>
        <p className="text-zinc-300 mb-8 cta-subtitle">
          Contáctanos y te ayudamos a encontrar ese sabor especial que buscas.
        </p>
        <button className="cta-button">
          📞 Contactar Ahora
        </button>
      </motion.section>

      {/* FOOTER */}
      <footer className="productos-footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} DulcesMex — Sabor con tradición.
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