import { User, PrismaClient, Prisma} from "@prisma/client";

import { UsersRepository } from "../user-repository";
import { randomUUID } from "node:crypto";

export class PrismaUsersRepository implements UsersRepository {

    private Users = (new PrismaClient()).user

    async getAll (): Promise<User[]> {
        const users = await this.Users.findMany()
        return users;
    }

    async create (data: Prisma.UserCreateInput): Promise<User> {
        const user = await this.Users.create({
            data
        })
        
        return user
    }
   
    async findById (id: string): Promise<User | null> {
        const user = await this.Users.findUnique({
            where: {
                id
            }
        })

        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.Users.findUnique({
            where: {
                email
            }
        })

        return user
    }

    async findByNickname(nickname: string): Promise<User | null> {
        const user = await this.Users.findUnique({
            where: {
                nickname
            }
        })
        

        return user
    }
    
    
    async delete(id: string): Promise<User | null> {
        const user = await this.Users.delete({
            where: {
                id
            }
        })

        return user
    }

    update(data: Prisma.UserUpdateInput): Promise<User> {
        throw new Error("Method not implemented.");
    }
}