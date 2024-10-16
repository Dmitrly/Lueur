import { nunito_font } from "@/Fonts"
import { Dispatch, SetStateAction } from "react"

interface IPostsNavigation {
    active: "popular" | "following",
    setActive:  Dispatch<SetStateAction<"popular" | "following">>
}

const PostsNavigation: React.FC<IPostsNavigation> = ({active, setActive}) => {
    return (
        <>
            <nav className={`flex items-end gap-10 mx-auto mt-10 ${nunito_font.className} tracking-wide font-bold text-gray-500`}>
                <button onClick={() => setActive("popular")} className={`${active === "popular" ? 'text-black underline underline-offset-8 decoration-[3px] decoration-[#5d6fe1]' : ''}`}>Popular</button>
                <button onClick={() => setActive("following")} className={`${active === "following" ? 'text-black' : ''}`}>Following</button>
            </nav>
        </>
    )
}

export default PostsNavigation