import { Router } from "express";
import {
  createPlatformDTO,
  getPlatformByIdDTO,
  updatePlatformDTO,
} from "./dto.js";
import { validate } from "../../middlewares/validate.js";
import PlatformController from "./controller.js";

const router = Router();

router.get("/", PlatformController.getAll);
router.get(
  "/:id",
  validate(getPlatformByIdDTO, "params"),
  PlatformController.getById,
);

router.post(
  "/",
  validate(createPlatformDTO),
  PlatformController.create,
);

router.put(
  "/:id",
  validate(getPlatformByIdDTO, "params"),
  validate(updatePlatformDTO),
  PlatformController.update,
);

router.delete(
  "/:id",
  validate(getPlatformByIdDTO, "params"),
  PlatformController.delete,
);

export default router;
