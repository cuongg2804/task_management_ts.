"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatch = exports.editMulti = exports.edit = exports.createPost = exports.changeMulti = exports.changeStatus = exports.detail = exports.index = void 0;
var task_model_1 = __importDefault(require("../model/task.model"));
// [GET] /api/v1/tasks
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var find, sort, pagination, page, skip, task, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                find = {
                    deleted: false
                };
                //Lọc theo trạng thái
                if (req.query.status) {
                    find["status"] = "".concat(req.query.status);
                }
                sort = {};
                if (req.query.sortKey && req.query.sortValue) {
                    sort["".concat(req.query.sortKey)] = "".concat(req.query.sortValue);
                }
                pagination = {
                    limit: 2,
                    page: 1,
                    skip: 0
                };
                if (req.query.page) {
                    page = parseInt("".concat(req.query.page));
                    skip = (page - 1) * pagination.limit;
                    pagination.skip = skip;
                }
                //Phân trang
                //Tìm kiếm
                if (req.query.keyWord) {
                    find["title"] = "".concat(req.query.keyWord);
                    console.log(req.query.keyWord);
                }
                return [4 /*yield*/, task_model_1.default.find(find).sort(sort)
                        .limit(pagination.limit)
                        .skip(pagination.skip)];
            case 1:
                task = _a.sent();
                res.json(task);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                res.redirect("back");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.index = index;
// [GET] /api/v1/tasks/detail/:id
var detail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, task_model_1.default.find({
                    _id: req.params.id,
                    deleted: false
                })];
            case 1:
                task = _a.sent();
                res.json(task);
                return [2 /*return*/];
        }
    });
}); };
exports.detail = detail;
// [PATCH] /api/v1/change-status/:id
var changeStatus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, status_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                status_1 = req.body.status;
                console.log(status_1);
                return [4 /*yield*/, task_model_1.default.updateOne({
                        _id: id,
                        deleted: "false"
                    }, {
                        status: status_1
                    })];
            case 1:
                _a.sent();
                res.json({
                    code: 200,
                    message: "Cập nhật trạng thái thành công !"
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.json({
                    code: 400,
                    message: "Không tìm thấy bản ghi !"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.changeStatus = changeStatus;
// [PATCH] /api/v1/change-multi
var changeMulti = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ids, status_2, listStatus, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, ids = _a.ids, status_2 = _a.status;
                listStatus = ["initial", "finish", "pending", "doing", "notFinish"];
                if (!listStatus.includes(status_2)) return [3 /*break*/, 2];
                return [4 /*yield*/, task_model_1.default.updateMany({
                        _id: { $in: ids },
                        deleted: false
                    }, {
                        status: status_2
                    })];
            case 1:
                _b.sent();
                _b.label = 2;
            case 2:
                res.json({
                    code: 200,
                    message: "Cập nhật trạng thái thành công !"
                });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                res.json({
                    code: 400,
                    message: "Không tìm thấy bản ghi !"
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.changeMulti = changeMulti;
// POST /v1/api/task/create
var createPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newTask = new task_model_1.default(req.body);
                return [4 /*yield*/, newTask.save()];
            case 1:
                _a.sent();
                res.json({
                    code: 200,
                    message: "Tạo mới công việc thành công!"
                });
                return [2 /*return*/];
        }
    });
}); };
exports.createPost = createPost;
// [PATCH] /v1/api/task/edit/:id
var edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, task_model_1.default.updateOne({
                        _id: id
                    }, req.body)];
            case 1:
                _a.sent();
                res.json({
                    code: 400,
                    message: "Sửa sản phẩm thành công !"
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.json({
                    code: 200,
                    message: "Chỉnh sửa các sản phẩm không thành công!"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.edit = edit;
// [PATCH] /v1/api/task/edit-multi
var editMulti = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ids, status_3, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, ids = _a.ids, status_3 = _a.status;
                return [4 /*yield*/, task_model_1.default.updateMany({ _id: { $in: ids } }, { $set: { status: status_3 } })];
            case 1:
                _b.sent();
                res.json({
                    code: 400,
                    message: "Chỉnh sửa các sản phẩm thành công!"
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                res.json({
                    code: 200,
                    message: "Chỉnh sửa các sản phẩm không thành công!"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.editMulti = editMulti;
// [PATCH] /v1/api/task/delete/:id
var deletePatch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, task_model_1.default.updateOne({
                        _id: req.params.id
                    }, {
                        deleted: true,
                        deletedAt: new Date()
                    })];
            case 1:
                _a.sent();
                res.json({
                    code: 200,
                    message: "Xóa công việc thành công!"
                });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.json({
                    code: 400,
                    message: "Xóa công việc không thành công!"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deletePatch = deletePatch;
