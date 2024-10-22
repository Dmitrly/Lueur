import { IComment } from "@/lib/Models/Comment.model";
import axios from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, useState, Dispatch, SetStateAction } from "react"

interface IAddCommentForm {
    post_id: string | undefined,
    displayForm: boolean,
    setPostComments: Dispatch<SetStateAction<IComment[]>>
}

const AddCommentForm: React.FC<IAddCommentForm> = ({post_id, displayForm, setPostComments}) => {
    const [body, setBody] = useState<string>('');
    const {data} = useSession()
    const postComment = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // alert(body)
        // axios.post('/api/comments', {body, post_id}).then(data => console.log(data))
        // axios.get('/api/comments').then(data => console.log((data)))
        if(body.trim()){
            axios.post('/api/comments', {body, post_id, author_email: data?.user?.email}).then(data =>{
                console.log(data.data)
                setPostComments(prev => [...prev, data.data])
                setBody('')
            })
        }
    }
    console.log(data)
    return (
        <>
            <form onSubmit={e => postComment(e)} className={` ${displayForm ? 'flex' : 'hidden'} items-center gap-2 bg-[#eef0f2] px-3 py-2 mt-4 rounded-full`}>
                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden">
                    <img alt="avatar" src={data?.user?.image || ""}/>
                </div>
                <div className="flex items-center justify-between bg-white flex-grow px-4 py-2 rounded-full text-[#8992c9]">
                    <input value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Comment..." className="w-[70%]"/>
                    <button className="text-[#9f9f9f]" type="submit">Post</button>
                </div>
            </form>
        </>
    )
}

export default AddCommentForm