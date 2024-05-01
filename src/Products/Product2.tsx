import { useNavigate } from 'react-router'
import Gucci from "../assets/guccibelt.png"

const Product2 = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center gap-20 justify-center min-h-[400px] flex-col ">
      <div className=" w-[460px] flex items-center justify-center flex-col animate__animated animate__fadeIn">
        <img src={Gucci} alt="Gucci Belt" />
        <span className="text-4xl font-bold">Gucci Belt</span>
      </div>

            <button onClick={() => navigate(-1)} className="self-center w-28 h-14 bg-black border-white border-2 text-white">Back</button>
            </div>
  )
}

export default Product2;
