import { model, models, Schema } from "mongoose"
import { IUser } from "./User.model"



export interface IComment {
    _id?: string,
    author?: IUser,
    // author_id?: string,
    body: string
}

const commentScheme = new Schema<IComment>({
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    // author_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    body: {type: String, required: true}
}, {timestamps: true})

export const Comment = models.Comment || model('Comment', commentScheme)