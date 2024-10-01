
export class NicknameUserAlreadyExistsError extends Error {
    constructor () {
        super ('Nickname already exists.')
    }
}
