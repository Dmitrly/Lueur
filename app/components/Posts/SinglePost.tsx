"use client"
import { nunito_font } from "@/Fonts";
import { IPost } from "@/lib/Models/Post.model";
import { useState } from "react";
import Comments from "./Comments/Comments";
import AddCommentForm from "./Comments/AddCommentForm";



const SinglePost: React.FC<IPost> = ({author_id, body, likes, title, _id, image, comments}) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [displayForm, setDisplayForm] = useState<boolean>(false)
    return (
        <>
            <div style={{boxShadow: '0px 5px 6px 5px #E6E5E5'}} className={`relative bg-white py-8 px-10 rounded-3xl w-[900px] mt-10 ${nunito_font.className} tracking-wider`}>
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-bold">Loolah20</h3>
                        <p className="text-sm text-[#9f9f9f]">3 mins</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#9f9f9f]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>
                <p className="mt-6 tracking-normal text-[#5E5E5E]">{body}</p>
                <img alt={image} src={image} className="mt-6 rounded-xl"/>
                {/* bottom reactions */}
                <div className="flex items-center mt-4 text-[#9f9f9f] gap-4 w-full">
                    {/*HEART LIKE*/}
                    <button onClick={() => setIsLiked(prev => !prev)}>
                        {
                            isLiked ? 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-rose-600 ">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 hover:text-rose-400 transition-all duration-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        }
                    </button>
                    
                    {/* COMMENT */}
                    <button onClick={() => setDisplayForm(prev => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 hover:text-[#8897f6] transition-all duration-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </button>

                    {/* REPOST */}
                    <button className="ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>

                {/* AVATAR */}
                <div className="absolute overflow-hidden top-0 left-[-100px] rounded-full w-[70px] h-[70px]">
                    <img alt="avatar" src="https://i.pinimg.com/564x/2d/23/93/2d239360a451ca8ae2a359e78071ba21.jpg"/>
                </div>

                {/* COMMENTS */}
                <Comments comments={comments || []}/>
                <AddCommentForm post_id={_id} displayForm={displayForm}/> 
            </div>
        </>
    )
}

export default SinglePost