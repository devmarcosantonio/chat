import { User, Prisma } from "@prisma/client";
import { UsersRepository } from "../user-repository";
import { randomUUID } from "node:crypto";

export class InMemoryUsersRepository implements UsersRepository {

    private users: User[]
    constructor () {
        this.users = []
    }

    async getAll(): Promise<User[]> {
        return this.users
    }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user = {
            id: data.id ?? randomUUID(),
            nickname: data.nickname,
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            created_at: new Date()
        }

        this.users.push(user)

        return user
    }
    update(user: Prisma.UserUpdateInput): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    
    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find((item) => item.email === email)
        if (!user) {
            return null
        }
        return user
    }

    async findByNickname(nickname: string): Promise<User | null> {
        const user = this.users.find((item) => item.nickname === nickname)
        if (!user) {
            return null
        }
        return user
    }
    delete(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}