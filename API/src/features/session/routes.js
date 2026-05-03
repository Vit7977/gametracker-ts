import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createSessionDTO, idDTO, updateSessionDTO } from "./dto.js";
import SessionController from "./controller.js";

const router = Router();

router.get("/", SessionController.getAll);
router.get("/:id", validate(idDTO, "params"), SessionController.getById);

router.post("/", validate(createSessionDTO), SessionController.create);
router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateSessionDTO),
  SessionController.update,
);
router.delete("/:id", validate(idDTO, "params"), SessionController.delete);

export default router;
