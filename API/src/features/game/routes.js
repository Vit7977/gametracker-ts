import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createGameDTO, idDTO, updateGameDTO } from "./dto.js";
import GameController from "./controller.js";

const router = Router();

router.get("/", GameController.getAll);
router.get("/:id", validate(idDTO, "params"), GameController.getById);

router.post("/", validate(createGameDTO), GameController.create);
router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateGameDTO),
  GameController.update,
);

router.delete("/:id", validate(idDTO, "params"), GameController.delete);

export default router;
