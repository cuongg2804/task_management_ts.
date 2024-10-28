import express, {Request,Response,Router } from "express";
const router :Router = express.Router();
import * as taskController from "../controller/task.controller";
import {validateCreate} from "../../validate/create.validate";
// [GET] /api/v1/tasks
router.get("/", taskController.index);

// [GET] /api/v1/tasks/detail/:id
router.get("/detail/:id", taskController.detail);

// [PATCH] /api/v1/change-status/:id
router.patch("/change-status/:id", taskController.changeStatus);

// [PATCH] /api/v1/change-multi
router.patch("/change-multi", taskController.changeMulti);

// POST /v1/api/task/create

router.post("/create", validateCreate,taskController.createPost);


// PATCH /v1/api/task/edit/:id
router.patch("/edit/:id", taskController.edit);


// PATCH /v1/api/task/edit-multi
router.patch("/edit-multi", taskController.editMulti);

// [PATCH] /v1/api/task/delete/:id
router.patch("/delete/:id", taskController.deletePatch);

export default router;
