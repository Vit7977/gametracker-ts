import { Router } from "express";
import { createGamePlatformDTO, idDTO, updateGamePlatformDTO } from "./dto.js";
import { validate } from "../../middlewares/validate.js";
import GamePlatformController from "./controller.js";

const router = Router();

router.get("/", GamePlatformController.getAll);
router.get("/:id", validate(idDTO, "params"), GamePlatformController.getById);

router.post(
  "/",
  validate(createGamePlatformDTO),
  GamePlatformController.create,
);
router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateGamePlatformDTO),
  GamePlatformController.update,
);
router.delete("/:id", validate(idDTO, "params"), GamePlatformController.delete);

export default router;
