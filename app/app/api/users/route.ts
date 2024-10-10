import { User } from "@/lib/Models/User";
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { NextResponse } from "next/server";



export async function GET() {
    await mongooseConnect()
    const orders = await User.find()
    return NextResponse.json(orders)
}