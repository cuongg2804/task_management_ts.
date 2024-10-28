"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var database_1 = require("./config/database");
var index_router_1 = __importDefault(require("./ver1/router/index.router"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, database_1.connect)();
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var port = "".concat(process.env.PORT) || 3000;
(0, index_router_1.default)(app);
app.use((0, cors_1.default)());
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
