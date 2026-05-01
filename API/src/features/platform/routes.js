import { Router } from "express";
import {
  createPlatformDTO,
  getPlatformByIdDTO,
  updatePlatformDTO,
} from "./dto.js";
import { validate } from "../../middlewares/validate.js";
import PlatformController from "./controller.js";

const router = Router();

router.get("/", PlatformController.getAllPlatforms);
router.get(
  "/:id",
  validate(getPlatformByIdDTO, "params"),
  PlatformController.getPlatformById,
);

router.post(
  "/",
  validate(createPlatformDTO),
  PlatformController.createPlatform,
);

router.put(
  "/:id",
  validate(getPlatformByIdDTO, "params"),
  validate(updatePlatformDTO),
  PlatformController.updatePlatform,
);

router.delete(
  "/:id",
  validate(getPlatformByIdDTO, "params"),
  PlatformController.deletePlatform,
);

export default router;
