import axios from "axios";
import { FormEvent, useState } from "react"

interface IAddCommentForm {
    post_id: string | undefined,
    displayForm: boolean
}

const AddCommentForm: React.FC<IAddCommentForm> = ({post_id, displayForm}) => {
    const [body, setBody] = useState<string>('');
    const postComment = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // alert(body)
        axios.post('/api/posts/comments', {body, post_id}).then(data => console.log(data))
    }
    return (
        <>
            <form onSubmit={e => postComment(e)} className={` ${displayForm ? 'flex' : 'hidden'} items-center gap-2 bg-[#eef0f2] px-3 py-2 mt-4 rounded-full`}>
                <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden">
                    <img alt="avatar" src="https://i.pinimg.com/736x/55/9b/63/559b63f236f445807704f0f18bf896b4.jpg"/>
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