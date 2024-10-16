import { montserrat_font } from "@/Fonts"
import { IComment } from "@/lib/Models/Comment.model"



const SingleComment: React.FC<IComment> = ({body}) => {
    return (
        <>
            <div className={` flex items-center justify-between`}>
                <div className="flex items-center gap-6 w-[100%]">
                    <div className="rounded-full h-[50px] w-[50px] overflow-hidden flex items-center justify-center">
                        <img src="https://i.pinimg.com/736x/e9/a0/65/e9a0656a807a7c90c45014fbbaa22299.jpg" alt="commet_avatar" />
                    </div>
                    <h3 className="text-sm tracking-widest text-[#8992c9] font-bold">Ryan Gosling</h3>
                    <p className={`${montserrat_font.className} text-[12px] text-[#9f9e9e]`}>{body}</p>
                </div>
                
            </div>
        </>
    )
}

export default SingleComment