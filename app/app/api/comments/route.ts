import { Comment } from "@/lib/Models/Comment.model";
import { Post } from "@/lib/Models/Post.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";



export async function GET() {
    await mongooseConnect()

    return NextResponse.json({message: 'hellow world'})
}

export async function POST(req: Request) {
    await mongooseConnect()
    const {body, post_id} = await req.json()
    const newComment = await Comment.create({body, author_id: '1'})
    await Post.findByIdAndUpdate(post_id, { $push: {comments: newComment._id}})
    return NextResponse.json(newComment)
}