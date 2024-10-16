import { model, models, Schema } from "mongoose"



export interface IComment {
    _id?: string,
    author_id: string,
    body: string
}

const commentScheme = new Schema<IComment>({
    author_id: String,
    body: {type: String, required: true}
}, {timestamps: true})

export const Comment = models.Comment || model('Comment', commentScheme)