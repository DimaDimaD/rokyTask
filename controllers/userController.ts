import { Request, Response} from "express";
import {UserService} from "../services/userService";

const userService = new UserService()

export class userController {

    static async getAllUsers(req: Request, res: Response) {
        const users = await userService.getAllUsers(req, res)
        return res.json({users});
    }

    static async getUser(req: Request, res: Response) {
        const user = await userService.getUser(req, res)
        return res.json({user});
    }

    static async addUser(req: Request, res: Response) {
        const user = await userService.addUser(req, res)
        return res.json({user})
    }

    static async updateUser(req: Request, res: Response) {
        const user = await userService.updateUser(req, res)
        return res.json({user})
    }
}