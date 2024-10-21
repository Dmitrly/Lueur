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
    interests?: Array<string>,
    image: string
}


const userScheme = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}],
    followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    interests: [String],
    image: {type: String, default: 'https://i.pinimg.com/736x/11/2e/ed/112eed3d853b916838839a7438977cfb.jpg'}
})

export const User = models.User || model('User', userScheme)