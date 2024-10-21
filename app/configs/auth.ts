// import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs"
import { mongooseConnect } from "@/lib/mongodb/Connect";
import { User } from "@/lib/Models/User.model";


export const authConfig = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label: 'Email', type: 'email', required: true},
                password: {label: 'Password', type: 'password', required: true}
            },
            async authorize(credentials:any) {
                if(!credentials?.email || !credentials?.password) return null
                
                try{
                    await mongooseConnect()
                    const foundUser = await User.findOne({ email: credentials.email })
                    console.log(foundUser)
                    if(foundUser){
                        // const isPasswordCorrect = await bcrypt.compare(credentials.password, foundUser.password)
                        const isPasswordCorrect = credentials.password == foundUser.password
                        // const isPasswordCorrect = true
                        if(isPasswordCorrect){
                            return foundUser
                        }else{
                            throw new Error("Invalid password.")
                        }
                    }else{
                        throw new Error("User with this email doesn't exist.")
                    }
                }catch(e: any){
                    throw new Error(e)
                }
            },
        })
      ],
    //   secret: process.env.NEXTAUTH_SECRET,
    secret: 'secret',
      pages: {
        signIn: '/login'
      }
}