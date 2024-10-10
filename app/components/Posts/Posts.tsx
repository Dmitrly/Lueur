import { IPost } from "@/lib/Models/Post.model"
import PostsNavigation from "./PostsNavigation"
import { useState } from "react"

interface IPosts {
    posts: Array<IPost>
}

const Posts:React.FC<IPosts> = ({posts}) => {
    const [active, whichActive] = useState<"popular" | "following">("popular")
    return (
        <>
            <div>
                <PostsNavigation active={active}/>
            </div>
        </>
    )
}

export default Posts