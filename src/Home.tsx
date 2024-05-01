import "animate.css";
import sneaker from "./assets/sneaker.png";

const Home = () => {
  return (
    <div className=" h-full  bg-[#FAFFFD] flex items-center">
      <img
        src={sneaker}
        alt=""
        className="w-1/2 px-2 animate__animated animate__fadeInLeft pointer-events-none"
      />
      <p className="font-bold text-black text-7xl animate__animated animate__fadeInRight">
        "Discover, Shop, Repeat – Your Chit Lu Mike E-Commerce. "
      </p>
      <div></div>
    </div>
  );
};

export default Home;
