import {Router} from "express";
import {postController} from '../controllers/postController';


export const postRouter = Router()


postRouter.post('/addPost', postController.addPost)
postRouter.post('/getPosts', postController.getPosts)