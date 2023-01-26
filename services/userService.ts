import {Request, Response} from "express";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export class UserService {

    async getAllUsers(req: Request, res: Response) {
        const {page, countPerPage} = req.params;

        let currentPage = Number(page) || 1
        let currentCount = Number(countPerPage) || 5

        const skip = currentPage > 1
            ? (currentPage - 1) * currentCount
            : 0

        let users = await prisma.user.findMany({

            skip: skip,
            take: currentCount,
            select: {
                id: true,
                name: true,
                lastName: true
            }
        })

        return users
    }

    async getUser(req: Request, res: Response) {
        const {id} = req.params

        let user = await prisma.user.findUnique({

            where: {
                id: Number(id)
            }
        })
        return user
    }

    async addUser(req: Request, res: Response) {
        const {name, lastName, description, city} = req.body

        const user = await prisma.user.create({

            data: {
                name: name,
                lastName: lastName,
                description: description,
                city: city
            },
        })

        return user
    }

    async updateUser(req: Request, res: Response) {
        const {id} = req.params
        const {name, lastName, description, city} = req.body


        const user = await prisma.user.update({

            where: {
                id: Number(id)
            },

            data: {
                name: name,
                lastName: lastName,
                description: description,
                city: city
            },
        })

        return user
    }
}