export interface IUser {
    username: string,
    notifications: {
        id: number,
        message: string,
        date: Date
    }[],
    avatar: string 
}
