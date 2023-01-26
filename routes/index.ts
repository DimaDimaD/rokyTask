import {Router} from "express";
import {userRouter} from './userRouter';
import {postRouter} from './postRouter';

export const router = Router()


router.use('/', userRouter)
router.use('/', postRouter)



