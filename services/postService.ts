import {Request, Response} from "express";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export class PostService {

    async addPost(req: Request, res: Response) {
        const {title, text, id, theme} = req.body

        const post = await prisma.post.create({

            data: {
                title: title,
                text: text,
                user: {
                    connect: { id }
                },
                theme: theme
            },
        })

        return post
    }

    async getPosts(req: Request, res: Response) {
        const {id} = req.body

        const posts = await prisma.post.findMany({
            where: {
                userId: id
            },
            include: {
                user: true,
            },
        })
        return posts
    }
}