
interface ISingleStoryBtn {
    img: string
}

const SingleStoryBtn: React.FC<ISingleStoryBtn> = ({img}) => {
    return (
        <>  
           
           <button className="w-[90px] h-[90px] rounded-full  border-[2px] outline  outline-[#5d6fe1] outline-3 flex items-center justify-center overflow-hidden shadow-sm shadow-[#5d6fe1] hover:shadow-lg hover:shadow-[#5d6fe1] transition-all duration-200 hover:scale-[1.2]">
                <img src={img} alt="img" className="hover:scale-[0.9] transition-all duration-200"/>
           </button>
        
        </>
    )
}

export default SingleStoryBtn