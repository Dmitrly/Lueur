import { model, models, Schema } from "mongoose"



export interface IUser {
    name: string,
    age: number
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    age: {type: Number, required: true}
})

export const User = models.User || model('User', userSchema)