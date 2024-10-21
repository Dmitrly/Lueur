import { User } from "@/lib/Models/User.model";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
    let foundUser = null
    const {name, email, password} = await req.json()
    try{
        await mongooseConnect()
    
        foundUser = await User.findOne({email: email})
    }catch(e){
        return NextResponse.json(e, {status: 500})
    }
    if(foundUser){
        return new NextResponse("User with this email already exists :(", {status: 400})
    }else{
        const newUser = await User.create({name, email, password, posts: [], following: [], followers: [], interests: []})
        return NextResponse.json(newUser)
    }
}