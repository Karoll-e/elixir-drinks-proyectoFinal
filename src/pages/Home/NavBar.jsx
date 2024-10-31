// Navbar.js
import React from "react";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";
import { ShoppingCart, User } from "lucide-react";
import logoElixir from "../../assets/logo-elixir.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>

          {/* Íconos a la derecha */}
          <Nav className="ms-auto">
            <NavItem>
              <Nav.Link href="#cart">
                <ShoppingCart color="white" size={20} />
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#account">
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
