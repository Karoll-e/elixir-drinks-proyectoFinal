import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import { ShoppingCart, User } from "lucide-react";
import logoElixir from "../../../assets/logo-elixir.png";
import "./NavBar.css";

const NavBar = () => {
  // Helper function to handle active class
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <Navbar expand="lg" className="nav-bar">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand as={Link} to="/">
          <img src={logoElixir} alt="" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav
            className="mx-auto"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <Nav.Link as={NavLink} to="/" className={navLinkClass}>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sobre-nosotros" className={navLinkClass}>
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className={navLinkClass}>
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className={navLinkClass}>
              Contacto
            </Nav.Link>
          </Nav>

          {/* Íconos a la derecha */}
          <Nav className="ms-auto">
            <NavItem>
              <Nav.Link as={Link} to="/cart">
                <ShoppingCart color="white" size={20} />
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/account">
                <User color="white" size={20} />
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;