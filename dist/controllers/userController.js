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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../services/userService");
const userService = new userService_1.UserService();
class userController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userService.getAllUsers(req, res);
            return res.json({ users });
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userService.getUser(req, res);
            return res.json({ user });
        });
    }
    static addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userService.addUser(req, res);
            return res.json({ user });
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userService.updateUser(req, res);
            return res.json({ user });
        });
    }
}
exports.userController = userController;
