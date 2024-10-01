import { describe, it, expect, beforeEach} from "vitest"
import { InMemoryUsersRepository } from "../repositiories/InMemoryRepositories/in-memory-users-repository"
import { CreateUserService } from "./create-user"
import { NicknameUserAlreadyExistsError } from "./errors/nickname-user-already-exists-error"
import { EmailUserAlreadyExistsError } from "./errors/email-user-already-exists-error"
import { GetAllUsersService } from "./get-all-users"
import { hash } from "bcryptjs"

describe ('Get All Users service.', () => {
    let usersRepository: InMemoryUsersRepository
    let sut: GetAllUsersService

    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new GetAllUsersService(usersRepository)
    })

    it('Deve ser possível puxar todos os usuários.', async () => {
        usersRepository.create({
            nickname: "npc.marc",
            name: 'Marcos Antonio',
            email: 'marcos@example.com',
            password_hash: await hash('123456', 6)
        })

        usersRepository.create({
            nickname: "marc.npc",
            name: 'Marcos Antonio',
            email: 'marcos111@example.com',
            password_hash: await hash('123456', 6)
        })

        const {users} = await sut.execute();


        expect(users).toHaveLength(2)
        expect(users).toEqual([
            expect.objectContaining({
                nickname: "npc.marc",
                email: 'marcos@example.com',
            }),
            expect.objectContaining({
                nickname: "marc.npc",
                email: 'marcos111@example.com',
            }) 
        ])
    })

})