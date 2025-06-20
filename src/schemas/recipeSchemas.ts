import Joi from "joi";

export const recipeQuerySchema = Joi.object({
  ingredient: Joi.string(),
  category: Joi.string(),
  area: Joi.string(),
}).or("ingredient", "category", "area");

export const recipeParamsSchema = Joi.object({
  id: Joi.string().required(),
});
