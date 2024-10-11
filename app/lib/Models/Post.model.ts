import {Schema, model, models} from "mongoose";


export interface IPost {
    _id?: string,
    title: string,
    author_id: string,
    image?: string,
    likes: number,
    body: string,
}


const postScheme = new Schema<IPost>({
    title: {type: String, required: true},
    author_id: {type: String, required: true},
    image: {type: String, required: false},
    likes: {type: Number, required: true},
    body: {type: String, required: true},
}, {timestamps: true})

export const Post = models.Post || model('Post', postScheme)