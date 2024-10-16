import { model, models, Schema } from "mongoose";
import { IPost } from "./Post.model";




export interface IUser {
    _id?: string,
    name: string,
    email: string,
    password: string,
    posts?: Array<IPost>,
    following?: Array<IUser>,
    followers?: Array<IUser>,
    interests?: Array<string>
}


const userScheme = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    interests: [String]
})

export const User = models.User || model('User', userScheme)