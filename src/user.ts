export interface User {
    firstName: string
    lastName: string
    age: number
}

export function getAll(user: User) {
    return `${user.firstName} ${user.lastName}`
}