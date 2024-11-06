//import Cocktails from "./pages/Cocteles/Cocktails";
import Home from "./pages/Home/Home";
import "./customTheme.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Home/Navbar/NavBar";
import Products from "./pages/Productos/Productos";
import SectionShop from "./pages/Shopping-cart/Section-Shop";
import { CartProvider } from "./pages/Shopping-cart/Context/cardContext";
import { Fotter } from "./pages/Productos/Fotter";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<About />} />{" "}
              {/* Ruta para About */}
              <Route path="/productos" element={<Products />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/cart" element={<SectionShop />} />
              <Route path="/account" element={""} />
              {/* Add a catch-all route for 404 pages */}
              <Route
                path="*"
                element={
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "80vh" }}
                  >
                    <h2>404 - Página no encontrada</h2>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
