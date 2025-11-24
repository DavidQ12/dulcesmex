import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductCard from "./components/productcard";

// IMPORTA TUS NUEVAS PÁGINAS
import Nosotros from "./components/Nosotros";
import Categorias from "./components/categorias";
import Productos from "./components/productos";
import Contacto from "./components/contacto";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Página de Inicio */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div style={{ padding: "20px" }}>
                <h2>Productos</h2>
                <ProductCard />
              </div>
            </>
          }
        />

        {/* Rutas adicionales */}
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
