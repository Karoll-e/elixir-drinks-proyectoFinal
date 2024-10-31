import React from 'react'
import './Contact.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <h1>¿Necesitas ayuda o tienes alguna pregunta?</h1>
      <p>
        Nos encantaría ayudarte a disfrutar de una experiencia única con nuestros cócteles.
        Queremos escuchar tus ideas, resolver tus dudas y mejorar junto a ti, porque tu opinión
        es fundamental para que sigamos creando momentos inolvidables.
      </p>
      
      <div className="contact-content">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Estamos aquí para atenderte</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="tel" placeholder="Teléfono" />
        <textarea placeholder="Cuéntanos tus ideas o en qué podemos ayudarte" />
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Información de contacto</h2>
      <p><strong>Teléfono:</strong> 310 5869874</p>
      <p><strong>Correo electrónico:</strong> elixir@cocteles.com</p>
      <p><strong>Horario de atención:</strong> Lunes - Domingo, 7 am - 11 pm</p>
      <p><strong>Ubicación:</strong> Carrera 20 # 19-50</p>
      <p><strong>Síguenos en redes:</strong></p>
      <p><FaInstagramSquare />  Instagram: @Elixir_cocktails</p>
      <p><FaFacebook />  Facebook: @Elixir_cocktails</p>
    </div>
  );
}

export default Contact;
