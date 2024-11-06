const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export const fetchCocktails = async (cocktailNames) => {
  try {
    const results = await Promise.all(
      cocktailNames.map((name) =>
        fetch(`${BASE_URL}search.php?s=${name}`)
          .then((response) => response.json())
          .then((data) => data.drinks || [])
      )
    );
    return results.flat();
  } catch (error) {
    console.error("Error mostrando cocteles:", error);
    throw error;
  }
};


export const fetchCocktailById = async (idDrink) => {
  try {
    const response = await fetch(`${BASE_URL}lookup.php?i=${idDrink}`);
    const data = await response.json();
    return data.drinks ? data.drinks[0] : null;
  } catch (error) {
    console.error("Error mostrando detalles de coctel:", error);
    throw error;
  }
};
