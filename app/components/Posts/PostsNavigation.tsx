import { nunito_font } from "@/Fonts"

interface IPostsNavigation {
    active: "popular" | "following"
}

const PostsNavigation: React.FC<IPostsNavigation> = ({active}) => {
    return (
        <>
            <nav className={`flex items-end gap-10 w-[57%] mx-auto mt-10 ${nunito_font.className} tracking-wide font-bold text-gray-500`}>
                <button className={`${active === "popular" ? 'text-black underline underline-offset-8 decoration-[3px] decoration-[#5d6fe1]' : ''}`}>Popular</button>
                <button className={`${active === "following" ? 'text-black' : ''}`}>Following</button>
            </nav>
        </>
    )
}

export default PostsNavigation