import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cocktailNames = ["margarita", "daiquiri", "gin tonic"];

    Promise.all(
      cocktailNames.map((name) =>
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        )
          .then((response) => response.json())
          .then((data) => data.drinks || [])
      )
    )
      .then((results) => {
        setCocktails(results.flat());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los cócteles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando cócteles...</p>;

  return (
    <div>
      <h2>Lista de Cócteles</h2>
      <ul>
        {cocktails.map((cocktail) => (
          <ul key={cocktail.idDrink}>
            <h3>{cocktail.strDrink}</h3>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width="100"
            />
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default CocktailList;
