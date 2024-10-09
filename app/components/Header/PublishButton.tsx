import { nunito_font } from "@/Fonts"
import Link from "next/link"

const PublishButton: React.FC = () => {
    return (
        <>
            <Link href={'/'} className={`${nunito_font.className} border-dashed border-2 border-[#ffd859] flex items-center gap-2 bg-[#f5c95d] py-2 px-10 rounded-full font-bold drop-shadow-xl transition-all hover:drop-shadow-md duration-200`}>
            {/* <Link href={'/'} className={`border-dashed border-2 border-[#ffd859] flex items-center gap-2 bg-[#f5c95d] py-2 px-10 rounded-full font-bold drop-shadow-xl transition-all hover:drop-shadow-md duration-200`}> */}
                
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </span>
                <span>
                    Publish
                </span>
            </Link>
        </>
    )
}


export default PublishButton