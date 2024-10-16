import Header from "@/components/Auth/Header"
import bgImage from "../../assets/images/bg.jpg"
import BodyAuth from "@/components/Auth/BodyAuth"



export const Registration: React.FC = () => {
    return (
        <>
            <div className="h-[100vh] w-[100vw] relative pt-10">
                <img src={bgImage.src} alt="bg-image" className="absolute z-[-1] w-[100vw] h-[100vh] top-0 left-0"/>
                <Header />
                <BodyAuth />
            </div>
        </>
    )
}

export default Registration