import { montserrat_font } from '@/Fonts';
import bg from '../../assets/images/bg.jpg'
import "../globals.css";



const Login:React.FC = () => {
    return (
        <>
            <div className="relative h-[100vh] w-[100vw] flex items-center justify-center flex-col text-white">
                <img src={bg.src} className="absolute z-[-1] top-0 left-0 w-[100vw] h-[100vh]"/>
                <h2 className={`${montserrat_font.className} text-6xl tracking-widest`}>Lueur</h2>
                <p className='mt-32 text-lg'>Don&apos;t have an account?</p>
                <form className='mt-10 flex items-center flex-col gap-4 w-[400px]'>
                    <input type="name" placeholder='Username' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <input type="email" placeholder='Email' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <input type="password" placeholder='Password' className='bg-[#31473a] px-8 py-4 text-lg rounded-full w-full'/>
                    <button className='text-[#658874] border-2 border-[#31473a] w-full block py-4 font-bold rounded-xl mt-10 hover:backdrop-blur-sm transition-all duration-200'>Sign up</button>
                    <button className='hover:underline'>Forgot password?</button>
                </form>
            </div>
        </>
    )
}

export default Login