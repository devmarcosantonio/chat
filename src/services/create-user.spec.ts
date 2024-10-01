import { describe, it, expect, beforeEach} from "vitest"
import { InMemoryUsersRepository } from "../repositiories/InMemoryRepositories/in-memory-users-repository"
import { CreateUserService } from "./create-user"
import { NicknameUserAlreadyExistsError } from "./errors/nickname-user-already-exists-error"
import { EmailUserAlreadyExistsError } from "./errors/email-user-already-exists-error"

describe ('Create User service.', () => {
    let usersRepository: InMemoryUsersRepository
    let sut: CreateUserService

    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new CreateUserService(usersRepository)
    })

    it('Deve ser possível criar usuário.', async () => {
        const {user} = await sut.execute({
            nickname: "npc.marc",
            name: 'Marcos Antonio',
            email: 'marcos@example.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('Não deve ser possível criar usuários com mesmo nickname.', async () => {
        await sut.execute({
            nickname: "npc.marc",
            name: 'Marcos Antonio',
            email: 'marcos@example.com',
            password: '123456'
        })

        expect(async () => {
            await sut.execute({
                nickname: "npc.marc",
                name: 'Marcos Antonio',
                email: 'marcos111@example.com',
                password: '123456'
            })
        }).rejects.toBeInstanceOf(NicknameUserAlreadyExistsError)
    })

    it('Não deve ser possível criar usuários com mesmo email.', async () => {
        await sut.execute({
            nickname: "npc.marc",
            name: 'Marcos Antonio',
            email: 'marcos@example.com',
            password: '123456'
        })

        expect(async () => {
            await sut.execute({
                nickname: "marc.npc",
                name: 'Marcos Antonio',
                email: 'marcos@example.com',
                password: '123456'
            })
        }).rejects.toBeInstanceOf(EmailUserAlreadyExistsError)
    })
})