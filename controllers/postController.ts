import {Request, Response} from "express";
import {PostService} from '../services/postService'

const postService = new PostService()

export class postController {

    static async addPost(req: Request, res: Response) {
        const post = await postService.addPost(req, res)
        return res.json({post})
    }

    static async getPosts(req: Request, res: Response) {
        const posts = await postService.getPosts(req, res)
        return res.json({posts})

        return undefined;
    }
}