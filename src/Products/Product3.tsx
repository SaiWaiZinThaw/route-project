import { useNavigate } from 'react-router'
import offWhite from "../assets/offwhite.png"

const Product3 = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center gap-20 justify-center min-h-[400px] flex-col ">
      <div className=" w-[800px] flex items-center justify-center flex-col animate__animated animate__fadeIn">
        <img src={offWhite} alt="Offwhite Shirt" className="w-[600px]"/>
        <span className="text-4xl font-bold">Offwhite Shirt</span>
      </div>

            <button onClick={() => navigate(-1)} className="self-center w-28 h-14 bg-black border-white border-2 text-white">Back</button>
            </div>
  )
}

export default Product3;
