
import { FastifyReply, FastifyRequest } from "fastify";
import {z} from 'zod'
import { makeCreateUserService } from "../../services/factories/make-create-user-service";
import { EmailUserAlreadyExistsError } from "../../services/errors/email-user-already-exists-error";
import { NicknameUserAlreadyExistsError } from "../../services/errors/nickname-user-already-exists-error";
import { makeGetAllUsersService } from "../../services/factories/make-get-all-users-service";


class UserController {
    async register (request: FastifyRequest, reply: FastifyReply) {

        const registerUserSchema = z.object({
            nickname: z.string().min(4),
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(6)
        })

        const {nickname, name, email, password} = registerUserSchema.parse(request.body) // parse = gera erro automático, safeparse não
    
        try {
            const createUserService =  makeCreateUserService()
            await createUserService.execute({nickname, name, email, password})
        } catch (error) {
            if (error instanceof EmailUserAlreadyExistsError) {
                return reply.status(409).send({message: error.message})
            }
            if (error instanceof NicknameUserAlreadyExistsError) {
                return reply.status(409).send({message: error.message})
            }
            // return reply.status(500).send()
            throw error
        }

        return reply.status(200)
    }

    async getAll (request: FastifyRequest, reply: FastifyReply) {

    
        try {
            const sut = makeGetAllUsersService()
            const users = await sut.execute()

            reply.status(200).send(JSON.stringify(users))
        } catch (error) {
            throw error
        }
    }


}

export default new UserController()