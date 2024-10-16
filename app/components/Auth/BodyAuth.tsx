import Link from "next/link"




const BodyAuth: React.FC = () => {
    return (
        <>
            <div className="text-5xl flex flex-col gap-10 items-center justify-center text-center tracking-widest font-bold text-white mt-32">
                <h2 className="w-[70%] backdrop-blur-sm px-4 py-10 rounded-3xl shadow-md">We believe the world is a better place with greater people in it</h2>
                <div className="flex items-center justify-center gap-8">
                    <Link href={'/signup'} className=" shadow-xl backdrop-blur-xl hover:backdrop-blur-sm transition-all duration-150 hover:scale-[1.1] py-1 text-2xl bg-none px-48 rounded-full">Sign up</Link>
                    <Link href={'/login'} className=" shadow-xl backdrop-blur-xl hover:backdrop-blur-sm transition-all duration-150 hover:scale-[1.1] py-1 text-2xl bg-none px-48 rounded-full">Log in</Link>

                </div>
            </div>
        </>
    )
}

export default BodyAuth