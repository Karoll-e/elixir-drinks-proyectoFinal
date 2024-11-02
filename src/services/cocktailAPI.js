const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const fetchCocktails = async (cocktailNames) => {
  try {
    const results = await Promise.all(
      cocktailNames.map((name) =>
        fetch(`${BASE_URL}${name}`)
          .then((response) => response.json())
          .then((data) => data.drinks || [])
      )
    );
    return results.flat();
  } catch (error) {
    console.error("Error fetching cocktails:", error);
    throw error; 
  }
};