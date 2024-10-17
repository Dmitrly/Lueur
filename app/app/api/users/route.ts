import { User } from "@/lib/Models/User.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
    await mongooseConnect()
    const {name, email, password} = await req.json()

    const foundUser = await User.findOne({email: email})
    if(foundUser){
        return new NextResponse("User with this email already exists.", {status: 400})
    }else{
        const newUser = await User.create({name, email, password, posts: [], following: [], followers: [], interests: []})
        return NextResponse.json(newUser)
    }
}