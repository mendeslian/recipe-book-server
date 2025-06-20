import { Request, Response, NextFunction } from "express";
import {
  fetchAllRecipes,
  fetchRecipesByArea,
  fetchRecipesByCategory,
  fetchRecipesByIngredient,
  fetchRecipeById,
} from "../services/recipeService";

export const getRecipes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ingredient, category, area } = req.query;

    let data;

    if (ingredient) data = await fetchRecipesByIngredient(ingredient as string);
    else if (category) data = await fetchRecipesByCategory(category as string);
    else if (area) data = await fetchRecipesByArea(area as string);
    else data = await fetchAllRecipes();

    if (!data || data.meals === null)
      return res.status(404).json({ message: "No recipes found" });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getRecipeDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const data = await fetchRecipeById(id);

    if (!data || data.meals === null) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
