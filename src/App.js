//import Cocktails from "./pages/Cocteles/Cocktails";
import Home from "./pages/Home/Home";
import './customTheme.css'
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Home/Navbar/NavBar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={""} />
            <Route path="/productos" element={""} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={""} />
            <Route path="/account" element={""} />
            {/* Add a catch-all route for 404 pages */}
            <Route path="*" element={
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                <h2>404 - Página no encontrada</h2>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
