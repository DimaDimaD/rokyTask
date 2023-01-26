import {Router} from "express";
import {userController} from '../controllers/userController';

export const userRouter = Router()

userRouter.get('/getUsers/:page/:countPerPage', userController.getAllUsers);
userRouter.get('/getUser/:id', userController.getUser);
userRouter.post('/addUser', userController.addUser);
userRouter.post('/updateUser/:id', userController.updateUser);