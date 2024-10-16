import {model, models, Schema} from 'mongoose'

export interface IComment {
    _id? :string,
    author_id: string,
    body: string,
    createdAt?: Date
}


export const commentSchema = new Schema<IComment>({
    author_id: {type: String, required: true},
    body: {type: String, required: true}
    
}, {timestamps: true})


export const Comment = models.Comment || model('Comment', commentSchema)