import { useNavigate } from 'react-router';
import LV from "../assets/LV.png"
import "animate.css"

const Product4 = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center gap-20 justify-center min-h-[400px] flex-col ">
      <div className=" w-[360px] flex items-center justify-center flex-col animate__animated animate__fadeIn gap-3">
        <img src={LV} alt="Louis Vuitton Bagpack" className="w-[380px]"/>
        <span className="text-4xl font-bold">Louis Vuitton Bagpack</span>
      </div>

            <button onClick={() => navigate(-1)} className="self-center w-28 h-14 bg-black border-white border-2 text-white">Back</button>
            </div>
  )
  
}

export default Product4;
