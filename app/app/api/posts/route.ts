import { Comment } from "@/lib/Models/Comment.model";
import { Post } from "@/lib/Models/Post.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";

export async function GET() {
    await mongooseConnect()
    // const posts = await Post.find().populate('comments')
    // const posts = await Post.find()
    const posts = await Post.find().populate({model: Comment, path: 'comments'})
    return NextResponse.json(posts)
}