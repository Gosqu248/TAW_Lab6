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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var express_1 = require("express");
var data_service_1 = __importDefault(require("modules/services/data.service"));
var testArr = [4, 5, 6, 3, 5, 3, 7, 5, 13, 5, 6, 4, 3, 6, 3, 6];
var PostController = /** @class */ (function () {
    function PostController() {
        var _this = this;
        this.path = '/api/post';
        this.router = (0, express_1.Router)();
        this.dataService = new data_service_1.default();
        //Lab7
        this.addData = function (request, response, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, title, text, image, readingData, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, title = _a.title, text = _a.text, image = _a.image;
                        readingData = {
                            title: title,
                            text: text,
                            image: image
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.dataService.createPost(readingData)];
                    case 2:
                        _b.sent();
                        response.status(200).json(readingData);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log('eeee', error_1);
                        console.error("Validation Error: ".concat(error_1.message));
                        response.status(400).json({ error: 'Invalid input data.' });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getElementById = function (request, response, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, allData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, this.dataService.query({ _id: id })];
                    case 1:
                        allData = _a.sent();
                        response.status(200).json(allData);
                        return [2 /*return*/];
                }
            });
        }); };
        this.removePost = function (request, response, next) { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, this.dataService.deleteData({ _id: id })];
                    case 1:
                        _a.sent();
                        response.sendStatus(200);
                        return [2 /*return*/];
                }
            });
        }); };
        //Lab6
        this.getAll = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                response.status(200).json(testArr);
                return [2 /*return*/];
            });
        }); };
        this.addDataL6 = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_a) {
                elem = req.body.elem;
                testArr.push(parseInt(elem));
                res.status(200).json(testArr);
                return [2 /*return*/];
            });
        }); };
        this.getById = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var id, item;
            return __generator(this, function (_a) {
                id = Number(request.params.id);
                item = testArr[id];
                if (item !== undefined) {
                    response.status(200).json(item);
                }
                else {
                    response.status(404).json({ message: 'Item not found' });
                }
                return [2 /*return*/];
            });
        }); };
        this.deleteById = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var id, index;
            return __generator(this, function (_a) {
                id = request.params.id;
                index = parseInt(id);
                if (!isNaN(index) && index >= 0 && index < testArr.length) {
                    testArr.splice(index, 1);
                    response.status(200).json(testArr);
                }
                else {
                    response.status(404).json({ message: 'Item not found' });
                }
                return [2 /*return*/];
            });
        }); };
        this.getNItems = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var num, selectedItems;
            return __generator(this, function (_a) {
                num = parseInt(request.params.num);
                if (isNaN(num) || num <= 0) {
                    response.status(400).json({ message: 'Invalid number specified' });
                }
                else {
                    selectedItems = testArr.slice(0, num);
                    response.status(200).json(selectedItems);
                }
                return [2 /*return*/];
            });
        }); };
        this.addElement = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var elem;
            return __generator(this, function (_a) {
                elem = request.body.elem;
                testArr.push(elem);
                response.status(200).json(testArr);
                return [2 /*return*/];
            });
        }); };
        this.deleteAll = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                testArr = [];
                response.status(200).json(testArr);
                return [2 /*return*/];
            });
        }); };
        this.initializeRoutes();
    }
    PostController.prototype.initializeRoutes = function () {
        this.router.get("".concat(this.path, "/latest"), this.getAll);
        this.router.post("".concat(this.path, "s/:id"), this.addDataL6);
        this.router.get("".concat(this.path, "/:id"), this.getById);
        this.router.post("".concat(this.path), this.addElement);
        this.router.delete("".concat(this.path, "/:id"), this.deleteById);
        this.router.post("".concat(this.path, "/:num"), this.getNItems);
        this.router.get("".concat(this.path, "s"), this.getAll);
        this.router.delete("".concat(this.path, "s"), this.deleteAll);
        this.router.post("".concat(this.path, ":"), this.addData);
    };
    return PostController;
}());
exports.default = PostController;
//# sourceMappingURL=data.controller.js.map