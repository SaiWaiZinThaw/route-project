import { useNavigate } from 'react-router'
import AF1 from "../assets/AF1.png"

const Product1 = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center gap-20 justify-center min-h-[400px] flex-col ">
      <div className=" w-[800px] flex items-center justify-center flex-col animate__animated animate__fadeIn">
        <img src={AF1} alt="Air Force 1" />
        <span className="text-4xl font-bold">Air Force 1</span>
      </div>

            <button onClick={() => navigate(-1)} className="self-center w-28 h-14 bg-black border-white border-2 text-white">Back</button>
            </div>
  )
}

export default Product1;
