import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchAllRecipes = async () => {
  const res = await axios.get(`${BASE_URL}/search.php?s=`);
  return res.data;
};

export const fetchRecipesByIngredient = async (ingredient: string) => {
  const res = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
  return res.data;
};

export const fetchRecipesByCategory = async (category: string) => {
  const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return res.data;
};

export const fetchRecipesByArea = async (area: string) => {
  const res = await axios.get(`${BASE_URL}/filter.php?a=${area}`);
  return res.data;
};

export const fetchRecipeById = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return res.data;
};
