import { Request, Response } from "express";
import {
  fetchAllRecipes,
  fetchRecipesByArea,
  fetchRecipesByCategory,
  fetchRecipesByIngredient,
  fetchRecipeById,
} from "../services/recipeService";

export const getRecipes = async (req: Request, res: Response) => {
  const { ingredient, category, area } = req.query;

  let data;

  if (ingredient) data = await fetchRecipesByIngredient(ingredient as string);
  else if (category) data = await fetchRecipesByCategory(category as string);
  else if (area) data = await fetchRecipesByArea(area as string);
  else data = await fetchAllRecipes();

  res.json(data);
};

export const getRecipeDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await fetchRecipeById(id);
  res.json(data);
};
