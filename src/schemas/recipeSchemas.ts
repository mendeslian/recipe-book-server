import Joi from "joi";

export const recipeQuerySchema = Joi.object({
  ingredient: Joi.string().trim().messages({
    "string.base": `"ingredient" must be a string`,
  }),
  category: Joi.string().trim().messages({
    "string.base": `"category" must be a string`,
  }),
  area: Joi.string().trim().messages({
    "string.base": `"area" must be a string`,
  }),
}).optional();

export const recipeParamsSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    "string.base": `"id" must be a string`,
    "any.required": `"id" is required`,
  }),
});
