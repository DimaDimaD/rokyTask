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
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserService {
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, countPerPage } = req.params;
            let currentPage = Number(page) || 1;
            let currentCount = Number(countPerPage) || 5;
            const skip = currentPage > 1
                ? (currentPage - 1) * currentCount
                : 0;
            let users = yield prisma.user.findMany({
                skip: skip,
                take: currentCount,
                select: {
                    id: true,
                    name: true,
                    lastName: true
                }
            });
            return users;
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let user = yield prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            });
            return user;
        });
    }
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, description, city } = req.body;
            const user = yield prisma.user.create({
                data: {
                    name: name,
                    lastName: lastName,
                    description: description,
                    city: city
                },
            });
            return user;
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, lastName, description, city } = req.body;
            const user = yield prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                    lastName: lastName,
                    description: description,
                    city: city
                },
            });
            return user;
        });
    }
}
exports.UserService = UserService;
