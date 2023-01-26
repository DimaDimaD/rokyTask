"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
exports.postRouter = (0, express_1.Router)();
exports.postRouter.post('/addPost', postController_1.postController.addPost);
exports.postRouter.post('/getPosts', postController_1.postController.getPosts);
