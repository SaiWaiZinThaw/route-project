import 'animate.css';

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-20 ">
        <form action="/products" className="w-[360px] bg-black flex flex-col p-10 gap-10 items-center rounded-md animate__animated  shadow-lg shadow-black animate__fadeInUp">
            <h1 className="text-3xl font-bold text-white">Login</h1>
       
        <input type="email" required id="email"  placeholder="Email Address" className="  p-2 w-full rounded-md border-white border bg-black text-white" />
        

        <input type="password" id="password" required  placeholder="Password" className="  p-2 w-full rounded-md border-white border bg-black text-white" />

        <button type="submit" className="text-white font-bold bg-black border-white border w-24 rounded-md h-10">Log In</button>
    </form>
    </div>
  )
}

export default Login;
