import { IComment } from "@/lib/Models/Comment.model"
import SingleComment from "./SingleComment"

interface IComments {
    comments: Array<IComment>
}


const Comments: React.FC<IComments> = ({comments}) => {
    const renderedComments = comments?.map(comment => {
        return (
            <SingleComment key={comment._id} {...comment}/>
        )
    })
    return (
        <>
            <div className="px-4 py-4 bg-[#eef0f2] mt-4 rounded-xl flex items-start flex-col gap-4">
                {renderedComments}
            </div>
        </>
    )
}


export default Comments