"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var task_router_1 = __importDefault(require("./task.router"));
var user_router_1 = __importDefault(require("./user.router"));
var routerV1 = function (app) {
    var version = "/v1/api";
    app.use(version + "/tasks", task_router_1.default);
    app.use(version + "/user", user_router_1.default);
};
exports.default = routerV1;
