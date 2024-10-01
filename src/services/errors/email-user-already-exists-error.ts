export class EmailUserAlreadyExistsError extends Error {
    constructor () {
        super ('Email already exists.')
    }
}
