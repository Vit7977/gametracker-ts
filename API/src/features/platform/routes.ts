import { Router } from "express";
import {
  createPlatformDTO,
  getPlatformByIdDTO,
  updatePlatformDTO,
} from "./dto";
import { validate } from "../../middlewares/validate";
import PlatformController from "./controller";

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
