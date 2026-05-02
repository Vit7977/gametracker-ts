import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import { createUGP_DTO, idDTO, updateUGP_DTO } from "./dto.js";
import UGPController from "./controller.js";

const router = Router();

router.get("/", UGPController.getAll);
router.get("/:id", validate(idDTO, "params"), UGPController.getById);

router.post("/", validate(createUGP_DTO), UGPController.create);
router.put(
  "/:id",
  validate(idDTO, "params"),
  validate(updateUGP_DTO),
  UGPController.update,
);
router.delete("/:id", validate(idDTO, "params"), UGPController.delete);

export default router;
