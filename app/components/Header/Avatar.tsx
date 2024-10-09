import Link from "next/link"



const Avatar:React.FC = () => {
    return (
        <>
            <Link href={'/'} className="w-[50px] h-[50px] overflow-hidden rounded-full">
                <img src="https://i.pinimg.com/736x/55/9b/63/559b63f236f445807704f0f18bf896b4.jpg" alt="avatar" 
                className="w-[50px] h-[50px]"/>
            </Link>
        </>
    )
}

export default Avatar