import React, { useState, useEffect } from "react";
import imagen3 from "../assets/Correo(3).png"; // Added .png extension
import imagen4 from "../assets/Wpp(4).png";
import imagen5 from "../assets/Facebook(5).png";
import imagen6 from "../assets/Instagram(6).png";
import styles from "../styles1/MainSections.module.css";

const MainSections = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      img: imagen3,
      text: "Correo Electronico: elixir@cocteles.com",
      buttonText: "Enviar",
    },
    {
      img: imagen4,
      text: "Whatsapp: 300-2598741",
      buttonText: "Continuar al chat",
    },
    {
      img: imagen5,
      text: "Facebook",
      buttonText: "https://www.elixircocteles.com/reel/",
    },
    {
      img: imagen6,
      text: "Instagram",
      buttonText: "https://www.instagram.com/direct/",
    },
  ];

  const nextPage = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevPage = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  // Auto-change slides
  useEffect(() => {
    const intervalId = setInterval(nextPage, 8000); // Change every 8 seconds
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [index]); // Added dependency array for useEffect

  return (
    <div className={styles.carrusel}>
      <div
        className={styles.hoja}
        style={{ transform: translateX(-${index * 100}%) }} // Fixed transform syntax
      >
        {slides.map((hoja, i) => (
          <div className={styles.pagina} key={i}>
            <img
              src={hoja.img}
              alt={Imagen de ${hoja.text}} // Fixed template literal syntax
              className={styles.imagen}
            />
            <div className={styles.texto}>{hoja.text}</div> {/* Added text content */}
            <button className={styles.boton}>{hoja.buttonText}</button> {/* Added button */}
          </div>
        ))}
      </div>
      <button onClick={prevPage} className={styles.prevButton}>Previous</button>
      <button onClick={nextPage} className={styles.nextButton}>Next</button>
    </div>
  );
};

export default MainSections;