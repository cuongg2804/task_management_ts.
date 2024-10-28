"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var taskController = __importStar(require("../controller/task.controller"));
var create_validate_1 = require("../../validate/create.validate");
// [GET] /api/v1/tasks
router.get("/", taskController.index);
// [GET] /api/v1/tasks/detail/:id
router.get("/detail/:id", taskController.detail);
// [PATCH] /api/v1/change-status/:id
router.patch("/change-status/:id", taskController.changeStatus);
// [PATCH] /api/v1/change-multi
router.patch("/change-multi", taskController.changeMulti);
// POST /v1/api/task/create
router.post("/create", create_validate_1.validateCreate, taskController.createPost);
// PATCH /v1/api/task/edit/:id
router.patch("/edit/:id", taskController.edit);
// PATCH /v1/api/task/edit-multi
router.patch("/edit-multi", taskController.editMulti);
// [PATCH] /v1/api/task/delete/:id
router.patch("/delete/:id", taskController.deletePatch);
exports.default = router;
