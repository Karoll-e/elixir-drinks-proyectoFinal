import React from "react";
import "./Hero.css";
import { Button, Container } from "react-bootstrap";

function HeroSection() {
  return (
    <div
      className="hero-section w-auto text-white d-flex flex-column justify-content-center align-items-center "
    >
      <Container>
        <h1 className="">Elixir</h1>
        <p className="lead fs-4">
          Explora el arte de la mixología con nuestros exclusivos cocteles
          artesanales.
        </p>
        <Button variant="secondary" size="ms">
          Explorar nuestros cocteles
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;
