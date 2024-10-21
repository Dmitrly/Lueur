"use client"
import { montserrat_font } from '@/Fonts';
import bg from '../../assets/images/bg.jpg'
import "../globals.css";
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react";
import { FormEvent, useState } from 'react';
import Swal from 'sweetalert2';


const Login:React.FC = () => {
    const {data} = useSession()
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    console.log(data)
    async function loginUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        setEmail(prev => prev.trim())
        if(password && email){
            const res = await signIn('credentials', {password, email, callbackUrl: '/', redirect: false})
            if(res?.error){
                Swal.fire({
                    title: 'Ooops...',
                    text: res.error,
                    icon: 'error'
                })
            }

        }else{
            Swal.fire({
                title: 'Ooops...',
                text: "Some field are emtpy :(",
                icon: 'error'
            })
        }
    }
    return (
        <>
            <div className="relative h-[100vh] w-[100vw] flex items-center justify-center flex-col text-white">
                <img src={bg.src} className="absolute z-[-1] top-0 left-0 w-[100vw] h-[100vh]"/>
                <h2 className={`${montserrat_font.className} text-6xl tracking-widest`}>Lueur</h2>
                <p className='mt-32 text-lg'>Have an account?</p>
                <form onSubmit={e => loginUser(e)} className='mt-10 flex items-center flex-col gap-4 w-[400px]'>
                    <input  value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder='Email' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <input value={password} onChange={e => setPassword(e.target.value)} required type="password" placeholder='Password' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <button className='text-[#658874] border-2 border-[#31473a] w-full block py-4 font-bold rounded-xl mt-10 hover:backdrop-blur-sm transition-all duration-200'>Log in</button>
                    <button className='hover:underline'>Forgot password?</button>
                    <Link href={'/signup'} className='text-[#658874]'>or Sign up</Link>
                </form>
                {/* <button onClick={loginUser}>TEST</button> */}
            </div>
        </>
    )
}

export default Login