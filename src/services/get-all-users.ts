import { User } from "@prisma/client"
import { UsersRepository } from "../repositiories/user-repository"

interface GetAllUsersServiceResponse {
    users: User[]
}

export class GetAllUsersService {

    constructor (private userRepository: UsersRepository) {}

    async execute (): Promise<GetAllUsersServiceResponse> {

        const users = await this.userRepository.getAll()

        return {
            users
        }
    }
}