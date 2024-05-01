import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="w-max-screen h-min-screen font-Tilt overscroll-x-none">
      <div className="bg-black px-5 py-3 flex justify-between items-center text-white font-bold">
        <a href="/home" className="font-sans text-2xl">Chit Lu Mike</a>
        <nav className="bg-black flex gap-8 text-white">
          
         <NavLink className={({isActive}) =>
            isActive ? "border-white  border-b-2" : ""

        } to={"/home"}>Home</NavLink>
         <NavLink className={({isActive}) =>
            isActive ? "border-white  border-b-2" : ""

        } to={"login"}>Login</NavLink>
         <NavLink className={({isActive}) =>
            isActive ? "border-white  border-b-2" : ""

        } to={"products"}>Products</NavLink>    

        </nav>

      </div>
    <Outlet/>
      
    </div>
  )
}

export default Layout
