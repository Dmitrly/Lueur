import { Post } from "@/lib/Models/Post.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";

export async function GET() {
    await mongooseConnect()
    const posts = await Post.find()
    return NextResponse.json(posts)
}