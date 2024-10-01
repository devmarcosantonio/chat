import { PrismaUsersRepository } from "../../repositiories/PrismaRepositories/prisma-users-repository"
import { CreateUserService } from "../create-user"
import { GetAllUsersService } from "../get-all-users"


export function makeGetAllUsersService (): GetAllUsersService {
    const prismaUsersRepository = new PrismaUsersRepository()
    const sut = new GetAllUsersService(prismaUsersRepository)
    return  sut
}