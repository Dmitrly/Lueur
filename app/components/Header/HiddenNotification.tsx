import { nunito_font } from "@/app/page"

interface IHiddenNotification {
    value?: number,
    className?: string,
    isShown: boolean
}

const HiddenNotification: React.FC<IHiddenNotification> = ({value, className, isShown}) => {
    return (
        <>
            <div className={`bg-[#5d6fe1]  text-[12px] w-[25px] h-[25px] rounded-full flex justify-center items-center text-white ${isShown ? 'flex' : 'hidden'} ` + className + ` ` + nunito_font.className}>
                {value}
            </div>
        </>
    )
}

export default HiddenNotification