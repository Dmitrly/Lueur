"use client"
import { montserrat_font } from '@/Fonts';
import bg from '../../assets/images/bg.jpg'
import "../globals.css";
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { IUser } from '@/lib/Models/User.model';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


const Signup:React.FC = () => {
    const [newUser, setNewUser] = useState<IUser>({} as IUser)
    const router = useRouter();
    const signupUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(newUser)
        if(!newUser.name.trim()){
            Swal.fire({
                title: "Ooops...",
                text: 'Name can not be empty.',
                icon: 'error'
            })
        }else if(!newUser.email.trim()){
            Swal.fire({
                title: "Ooops...",
                text: 'Email can not be empty.',
                icon: 'error'
            })
        }else if(newUser.password.length < 4){
            Swal.fire({
                title: "Ooops...",
                text: 'Password is too short.',
                icon: 'error'
            })
        }else{
            axios.post('/api/users', newUser)
            .then(res => {
                console.log(res)
                router.push('/login')
            })
            .catch(e => {
                console.log(e)
                Swal.fire({
                    title: "Ooops...",
                    text: e.response?.data || e.message,
                    icon: 'error'
                })
            })
        }

    }
    return (
        <>
            <div  className="relative h-[100vh] w-[100vw] flex items-center justify-center flex-col text-white">
                <img src={bg.src} className="absolute z-[-1] top-0 left-0 w-[100vw] h-[100vh]"/>
                <h2 className={`${montserrat_font.className} text-6xl tracking-widest`}>Lueur</h2>
                <p className='mt-32 text-lg'>Don&apos;t have an account?</p>
                <form onSubmit={e => signupUser(e)} className='mt-10 flex items-center flex-col gap-4 w-[400px]'>
                    <input required value={newUser?.name} onChange={e => setNewUser(prev => ({ ...prev, name: e.target.value } as IUser))}  type="name" placeholder='Username' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <input required value={newUser.email} onChange={e => setNewUser(prev => ({...prev, email: e.target.value}as IUser))} type="email" placeholder='Email' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <input required value={newUser.password} onChange={e => setNewUser(prev => ({...prev, password: e.target.value}as IUser))} type="password" placeholder='Password' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <button className='text-[#658874] border-2 border-[#31473a] w-full block py-4 font-bold rounded-xl mt-10 hover:backdrop-blur-sm transition-all duration-200'>Sign up</button>
                    <button className='hover:underline'>Forgot password?</button>
                    <Link href={'/login'} className='text-[#658874]'>or Log in</Link>
                </form>
            </div>
        </>
    )
}

export default Signup