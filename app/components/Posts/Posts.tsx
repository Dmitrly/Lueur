"use client"
import { IPost } from "@/lib/Models/Post.model"
import PostsNavigation from "./PostsNavigation"
import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"

interface IPosts {
    posts: Array<IPost>,
}

const Posts:React.FC<IPosts> = ({posts}) => {
    const [active, setActive] = useState<"popular" | "following">("popular")
    const renderedPosts = posts?.map(post => {
        return (
            <SinglePost {...post} key={post._id} />
        )
    })
    useEffect(() => {
        // alert(posts.length)
    }, [posts])
    return (
        <>
            <div className="w-[57%] mx-auto">
                <PostsNavigation active={active} setActive={setActive}/>
                {renderedPosts}
            </div>
        </>
    )
}

export default Posts