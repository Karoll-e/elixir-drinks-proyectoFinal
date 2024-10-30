import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, 
});

export const getCocktailsByName = async (name) => {
  try {
    const response = await apiClient.get(`/search.php?s=${name}`);
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching cocktails by name:", error);
    throw error;
  }
};

export const getCocktailsByIngredient = async (ingredient) => {
  try {
    const response = await apiClient.get(`/filter.php?i=${ingredient}`);
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching cocktails by ingredient:", error);
    throw error;
  }
};

export const getRandomCocktail = async () => {
  try {
    const response = await apiClient.get('/random.php');
    return response.data.drinks[0];
  } catch (error) {
    console.error("Error fetching random cocktail:", error);
    throw error;
  }
};
