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
exports.PostService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PostService {
    addPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, text, id, theme } = req.body;
            const post = yield prisma.post.create({
                data: {
                    title: title,
                    text: text,
                    user: {
                        connect: { id }
                    },
                    theme: theme
                },
            });
            return post;
        });
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const posts = yield prisma.post.findMany({
                where: {
                    userId: id
                },
                include: {
                    user: true,
                },
            });
            return posts;
        });
    }
}
exports.PostService = PostService;
