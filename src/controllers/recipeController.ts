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
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
