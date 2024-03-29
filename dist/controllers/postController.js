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
exports.postController = void 0;
const postService_1 = require("../services/postService");
const postService = new postService_1.PostService();
class postController {
    static addPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield postService.addPost(req, res);
            return res.json({ post });
        });
    }
    static getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield postService.getPosts(req, res);
            return res.json({ posts });
            return undefined;
        });
    }
}
exports.postController = postController;
