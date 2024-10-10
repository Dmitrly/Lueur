import Link from "next/link"
import AddStoryBtn from "./AddStoryBtn"
import EmptyStoryBtn from "./EmptyStoryBtn"
import SingleStoryBtn from "./SingleStoryBtn"
import { nunito_font } from "@/Fonts"



const Stories: React.FC = () => {
    return (
        <>
            <div className="flex items-end gap-20 w-[57%] mx-auto mt-10">
                <div className="flex items-center gap-6">
                    <AddStoryBtn />
                    <SingleStoryBtn img="https://i.pinimg.com/564x/b8/4d/b4/b84db4c0d65fc0d73d62e6f3546eda75.jpg"/>
                    <SingleStoryBtn img="https://i.pinimg.com/564x/bf/c8/5d/bfc85dd2edc2ea62c45cf3804042be69.jpg"/>
                    <SingleStoryBtn img="https://i.pinimg.com/564x/bc/8e/64/bc8e6488c4732959489aeaef645a8ccf.jpg"/>
                    <EmptyStoryBtn />
                    <EmptyStoryBtn />
                    <EmptyStoryBtn />
                </div>

                <Link href={'/'} className={`${nunito_font.className} text-[#5d6fe1]`}>see <br></br>more</Link>
            </div>
        </>
    )
}

export default Stories