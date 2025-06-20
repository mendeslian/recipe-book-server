import { Router } from "express";
import { getRecipes, getRecipeDetails } from "../controllers/recipeController";
import { validateQuery, validateParams } from "../middlewares/validate";
import {
  recipeQuerySchema,
  recipeParamsSchema,
} from "../schemas/recipeSchemas";

const router = Router();

router.get("/", validateQuery(recipeQuerySchema), getRecipes);
router.get("/:id", validateParams(recipeParamsSchema), getRecipeDetails);

export default router;
