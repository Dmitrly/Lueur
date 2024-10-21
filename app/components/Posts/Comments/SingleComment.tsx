import { montserrat_font } from "@/Fonts"
import { IComment } from "@/lib/Models/Comment.model"
import { useSession } from "next-auth/react"



const SingleComment: React.FC<IComment> = ({body, author}) => {
    const {data} = useSession()
    return (
        <>
            <div className={` flex items-center justify-between`}>
                <div className="flex items-center gap-6 w-[100%]">
                    <div className="rounded-full h-[50px] w-[50px] overflow-hidden flex items-center justify-center">
                        <img src={author?.image || data?.user?.image || ""} alt="avatar" />
                    </div>
                    <h3 className="text-sm tracking-widest text-[#8992c9] font-bold">{author?.name || "Name"}</h3>
                    <p className={`${montserrat_font.className} text-[12px] text-[#9f9e9e]`}>{body}</p>
                </div>
                
            </div>
        </>
    )
}

export default SingleComment