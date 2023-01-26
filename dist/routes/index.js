"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const postRouter_1 = require("./postRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/', userRouter_1.userRouter);
exports.router.use('/', postRouter_1.postRouter);
