import { Router } from "express";
import userController from "../controller/user.controller.js";
import { validate } from "../middleware/middleware.js";
import {
  createUserSchema,
  updateUserSchema,
} from "../validation/user.validate.js";
const router = Router();

router
  .get("/", userController.getAll)
  .get("/:id", userController.getId)
  .post("/", validate(createUserSchema), userController.createUser)
  .post("/login", validate(createUserSchema), userController.createUser)
  .put("/:id", validate(updateUserSchema), userController.updateUser)
  .delete("/:id", userController.deleteUser);
  
export { router };
