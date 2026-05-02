import { Router } from "express";
import { createPlatformDTO, idDTO, updatePlatformDTO } from "./dto.js";
import { validate } from "../../middlewares/validate.js";
import PlatformController from "./controller.js";

const router = Router();

router.get("/", PlatformController.getAll);
router.get("/:id", validate(idDTO, "params"), PlatformController.getById);

router.post("/", validate(createPlatformDTO), PlatformController.create);

router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updatePlatformDTO),
  PlatformController.update,
);

router.delete("/:id", validate(idDTO, "params"), PlatformController.delete);

export default router;
