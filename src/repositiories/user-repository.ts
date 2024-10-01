import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
    getAll(): Promise<User[]>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(data: Prisma.UserUpdateInput): Promise<User>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByNickname(nickname: string): Promise<User | null>;
    delete(id: string): Promise<User | null>;
}