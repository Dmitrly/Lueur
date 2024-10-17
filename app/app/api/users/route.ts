import { User } from "@/lib/Models/User.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";




export async function POST(req: Request, res: NextApiResponse) {
    await mongooseConnect()
    const {name, email, password} = await req.json()
    const newUser = await User.create({name, email, password, posts: [], following: [], followers: [], interests: []})
    return NextResponse.json(newUser)
}