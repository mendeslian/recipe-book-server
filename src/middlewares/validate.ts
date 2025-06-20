import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validateQuery = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query, { abortEarly: true });
    if (error) {
      return next(error);
    }
    next();
  };
};

export const validateParams = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params, { abortEarly: true });
    if (error) {
      return next(error);
    }
    next();
  };
};
