import mongoose from "mongoose";

const connection: { isConnected?: number} = {}

export async function mongooseConnect(){
    if(mongoose.connection.readyState === 1){
        console.log("Connected to MongoDB with Mongoose")
        return mongoose.connection.asPromise()
    }else{
        const uri:string = process.env.NEXT_PUBLIC_MONGODB_URI || "";
        console.log("Connected to MongoDB with Mongoose")
        return mongoose.connect(uri)
    }
    // console.log("!!!!!!!!!!!!!!!!!!!!!!! + " + process.env.NEXT_PUBLIC_MONGODB_URI)
    // if(connection.isConnected){
    //     return
    // }

    // const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!)
    // connection.isConnected = db.connections[0].readyState
}