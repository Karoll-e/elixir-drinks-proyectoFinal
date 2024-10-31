import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CocktailDetails() {
  const { id } = useParams(); // Obtener el id de la URL
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
        setCocktail(data.drinks[0]); // Guardar los detalles del cóctel
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener el cóctel:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalles del cóctel...</p>;
  if (!cocktail) return <p>No se encontró el cóctel.</p>;

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="200" />
      <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
      <p><strong>Tipo de bebida:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
      
      <h3>Ingredientes</h3>
      <ul>
        {Array.from({ length: 15 }).map((_, i) => {
          const ingredient = cocktail[`strIngredient${i + 1}`];
          const measure = cocktail[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {ingredient} - {measure || "al gusto"}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default CocktailDetails;
