import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";

export const validate =
  (schema: ZodObject<any>, property = "body") =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req[property as keyof Request]);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Erro de validação!",
        errors: parsed.error.issues.map((issue) => ({
          path: issue.path[0],
          message: issue.message,
        })),
      });
    }

    (req as any)[property] = parsed.data;
    next();
  };
