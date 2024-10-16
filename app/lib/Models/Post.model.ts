import {Schema, model, models} from "mongoose";
import { IComment } from "./Comment.model";


export interface IPost {
    _id?: string,
    title: string,
    author_id: string,
    image?: string,
    likes: number,
    body: string,
    comments?: Array<IComment>
}


const postSchema = new Schema<IPost>({
    title: { type: String, required: true },
    author_id: { type: String, required: true },
    image: { type: String },
    likes: { type: Number, required: true },
    body: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

export const Post = models.Post || model('Post', postSchema);