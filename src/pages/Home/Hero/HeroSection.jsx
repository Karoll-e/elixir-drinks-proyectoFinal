import React from "react";
import "./Hero.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section w-auto text-white d-flex flex-column justify-content-center align-items-center ">
      <Container>
        <h1 className="">Elixir</h1>
        <p className="lead fs-4">Donde cada trago cuenta una historia.</p>
        <Link to="/productos">
          <Button className="btn" variant="secondary" size="lg">
            Explora nuestros cocteles exclusivos
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default HeroSection;
