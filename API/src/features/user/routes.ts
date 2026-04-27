import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { createUserDTO } from "./dto";
import UserController from "./controller";

const router = Router();

router.get("/", UserController.getAllUsers);
// router.get("/:id");

router.post("/", validate(createUserDTO), UserController.createUser);
// router.put("/:id");
// router.delete("/:id");

export default router;
