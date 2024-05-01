import AF1 from "./assets/AF1.png"
import Belt from "./assets/guccibelt.png"
import Offwhite from "./assets/offwhite.png"
import LV from "./assets/LV.png"
import 'animate.css';
import { Outlet, useNavigate } from 'react-router';


const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[80vh] relative items-center flex flex-col justify-center ">
      <div className="grid grid-cols-4 gap-8 ">


        <div  className="product bg-black w-[280px] h-[500px] p-10 flex flex-col items-start gap-6 animate__animated animate__slideInLeft">
        <img src={AF1} alt="Nike Air Force 1" className="border border-white py-10 bg-white"/>
        <span className="text-white text-xl font-bold">Nike Air Force 1</span>
        <span className="text-white  font-bold">$150</span>
        <span className="text-white  font-bold">White</span>
        <button onClick={() => navigate("1")} className="self-center w-40 h-20 bg-black border-white border-2 text-white">More</button>
        </div>
        
        <div className="product bg-black w-[280px] h-[500px] p-10 flex flex-col items-start gap-6 animate__animated animate__slideInDown">
        <img src={Belt} alt="Gucci Belt" className="border border-white  bg-white"/>
        <span className="text-white text-xl font-bold">Gucci Belt</span>
        <span className="text-white  font-bold">$500</span>
        <span className="text-white  font-bold">Black</span>
        <button onClick={() => navigate("2")} className="self-center w-40 h-20 bg-black border-white border-2 text-white">More</button>
        </div>

        <div className="product bg-black w-[280px] h-[500px] p-10 flex flex-col items-start gap-6 animate__animated animate__slideInDown">
        <img src={Offwhite} alt="Offwhite Shirt" className="border border-white bg-white h-[300px]"/>
        <span className="text-white text-xl font-bold">Offwhite Shirt</span>
        <span className="text-white  font-bold">$300</span>
        <span className="text-white  font-bold">Black</span>
        <button onClick={() => navigate("3")}  className="self-center w-40 h-20 bg-black border-white border-2 text-white">More</button>
        </div>

        <div className="product bg-black w-[280px] h-[500px] p-10 flex flex-col items-start gap-6 animate__animated animate__slideInRight">
        <img src={LV} alt="Louis Vuitton Backpack" className="border border-white bg-white h-[200px] self-center px-10"/>
        <span className="text-white text-xl font-bold">Louis Vuitton Backpack</span>
        <span className="text-white  font-bold">$800</span>
        <span className="text-white  font-bold">Brown</span>
        <button onClick={() => navigate("4")} className="self-center w-40 h-20 bg-black border-white border-2 text-white">More</button>
        </div>
      </div>
<button className=" absolute -bottom-10 w-32 h-12 text-white bg-black border border-white">Contact Us</button>
    
    
    <Outlet/>

    
    </div>
  )
}

export default Products;
