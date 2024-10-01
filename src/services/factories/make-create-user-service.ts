import { PrismaUsersRepository } from "../../repositiories/PrismaRepositories/prisma-users-repository"
import { CreateUserService } from "../create-user"


export function makeCreateUserService (): CreateUserService {
    const prismaUsersRepository = new PrismaUsersRepository()
    const createUserService = new CreateUserService(prismaUsersRepository)
    return  createUserService
}