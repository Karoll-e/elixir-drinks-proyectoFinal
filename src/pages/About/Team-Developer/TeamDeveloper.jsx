import React from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";
import "./TeamDeveloper.css"

function TeamDeveloper() {
  return (
    <div className="bodyTeam">
      <Container className="section-team">
        <h1>TEAM DEVELOPER</h1>
        <div className="section-cards">
          <Cards name="Karol" />
          <Cards name="Milena" />
          <Cards name="Wendy" />
          <Cards name="Xiodanny" />
          <Cards name="Paula" />
          <Cards name="Sharay" />
        </div>
        <p>
          Este sitio web no sería posible sin el talento y la dedicación de
          nuestro equipo de programadores. Gracias a su creatividad,
          profesionalismo y atención al detalle, hemos logrado crear un espacio
          en línea que refleja nuestra pasión por la coctelería y permite a
          nuestros clientes vivir una experiencia envolvente desde cualquier
          lugar.
        </p>
      </Container>
    </div>
  );
}

export default TeamDeveloper;
