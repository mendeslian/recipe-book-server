import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchAllRecipes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/search.php?s=`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch all recipes");
  }
};

export const fetchRecipesByIngredient = async (ingredient: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch recipes filtering by ingredient");
  }
};

export const fetchRecipesByCategory = async (category: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch recipes filtering by category");
  }
};

export const fetchRecipesByArea = async (area: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/filter.php?a=${area}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch recipes filtering by area");
  }
};

export const fetchRecipeById = async (id: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch recipe by id");
  }
};
