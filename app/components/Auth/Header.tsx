import { montserrat_font, nunito_font, space_font } from "@/Fonts"
import Link from "next/link"




const Header:React.FC = () => {
    return (
        <>
            <div className={` flex items-center text-center justify-between backdrop-blur-xl w-[1200px] mx-auto px-8 py-6 text-[#E6F3FF] rounded-full shadow-xl`}>
                <div className="flex items-center gap-10 text-sm tracking-widest">
                    <Link href={'/'} className={` ${montserrat_font.className} `}>Help</Link>
                    <Link href={'/'}>Terms</Link>
                </div>
                <Link href={'/'} className="text-5xl tracking-widest font-bold uppercase">Lueur</Link>
                <p className="text-sm tracking-widest">Get to know Lueur</p>
            </div>
        </>
    )
}

export default Header