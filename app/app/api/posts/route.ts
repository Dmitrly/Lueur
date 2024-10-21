import { Comment } from "@/lib/Models/Comment.model";
import { Post } from "@/lib/Models/Post.model";
import { User } from "@/lib/Models/User.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";

export async function GET() {
    await mongooseConnect()
    // const posts = await Post.find().populate('comments')
    // const posts = await Post.find()
    const posts = await Post.find()
        .populate({model: Comment, path: 'comments',
            populate: {
                path: 'author',
                // path: 'author_id',
                model: User
              }
        })
    return NextResponse.json(posts)
}