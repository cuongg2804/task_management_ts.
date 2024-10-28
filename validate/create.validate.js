"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
var validateCreate = function (req, res, next) {
    if (!req.body.title) {
        res.json({
            code: 400,
            message: "Title require not null"
        });
        return;
    }
    if (!req.body.status) {
        res.json({
            code: 400,
            message: "Status require not null"
        });
        return;
    }
    next();
};
exports.validateCreate = validateCreate;
