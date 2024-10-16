import { Comment } from "@/lib/Models/Comment";
import { Post } from "@/lib/Models/Post.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";




export async function POST(req: Request, res: NextApiResponse){

    await mongooseConnect()
    const data = await req.json()
    const newComment = await Comment.create({author_id: "1", body: data.body})
    // console.log(JSON.stringify(newComment))
    await newComment.save()
    await Post.findByIdAndUpdate(data.post_id, { $push: {comments: newComment._id}})

    return NextResponse.json(newComment)
}


export async function GET(){
    await mongooseConnect()
    
}