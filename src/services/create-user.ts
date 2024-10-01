import { User } from "@prisma/client";
import { UsersRepository } from "../repositiories/user-repository";
import { hash } from "bcryptjs"
import { NicknameUserAlreadyExistsError } from "./errors/nickname-user-already-exists-error";
import { EmailUserAlreadyExistsError } from "./errors/email-user-already-exists-error";


interface CreateUserServiceRequest {
    nickname: string,
    name: string,
    email: string,
    password: string,
}

interface CreateUserServiceResponse {
    user: User
}

export class CreateUserService {

    constructor (private userRepository: UsersRepository) {}

    async execute ({nickname, name, email, password}: CreateUserServiceRequest): Promise<CreateUserServiceResponse> {

        const userSameNickname = await this.userRepository.findByNickname(nickname)
        const userSameEmail = await this.userRepository.findByEmail(email)

        if (userSameNickname) {
            throw new NicknameUserAlreadyExistsError()
        }
        if (userSameEmail) {
            throw new EmailUserAlreadyExistsError()
        }

        const password_hash = await hash(password, 6)

        const user = await this.userRepository.create({
            name, 
            nickname,
            password_hash,
            email
        })

        return {
            user
        }
    }
}