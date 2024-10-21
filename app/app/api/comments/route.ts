import { Comment } from "@/lib/Models/Comment.model";
import { Post } from "@/lib/Models/Post.model";
import { User } from "@/lib/Models/User.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";



export async function GET() {
    await mongooseConnect()

    return NextResponse.json({message: 'hellow world'})
}

export async function POST(req: Request) {
    const {body, post_id, author_email} = await req.json()
    let foundUser = null;
    try{
        await mongooseConnect()
        foundUser = await User.findOne({email: author_email})
    }catch(e){
        return NextResponse.json(e, {status: 500})
    }

    if(foundUser){
        const newComment = await Comment.create({body, author: foundUser._id})
        // const newComment = await Comment.create({body, author_id: foundUser._id})
        await Post.findByIdAndUpdate(post_id, { $push: {comments: newComment._id}})
        return NextResponse.json(newComment)
    }else{
        return new NextResponse("User was not found :(", {status: 401})
    }

}