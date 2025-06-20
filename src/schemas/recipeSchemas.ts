import Joi from "joi";

export const recipeQuerySchema = Joi.object({
  ingredient: Joi.string().messages({
    "string.base": `"ingredient" must be a string`,
  }),
  category: Joi.string().messages({
    "string.base": `"category" must be a string`,
  }),
  area: Joi.string().messages({
    "string.base": `"area" must be a string`,
  }),
})
  .or("ingredient", "category", "area")
  .messages({
    "object.missing": `At least one of 'ingredient', 'category' or 'area' must be provided`,
  });

export const recipeParamsSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.base": `"id" must be a string`,
    "any.required": `"id" is required`,
  }),
});
