import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const[isSignin,setIsSignin]=useState(true)



  const toggleSignup=()=>{
    setIsSignin(!isSignin)
  }




  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapercave.com/wp/wp1917128.jpg"
          alt=""
          className="h-screen w-screen object-cover"
        />
      </div>
      <form className="p-12 bg-black w-3/12 absolute my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-white text-3xl py-4 font-bold">
          {isSignin ? "Sign in" : "Sign up"}
        </h1>
        {
          !isSignin && <input type='text' placeholder='Name' className='p-4  my-2 w-full bg-slate-300 text-white'/>
        }
        <input
          type="text"
          placeholder="Email address or Phone"
          className="p-4  my-2 w-full bg-slate-300 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full  bg-slate-300 text-white"
        />
        <button className="p-2  my-4 bg-red-500 w-full rounded-lg">
          {isSignin ? "Sign in" : "Sign up"}
         </button>
        <p className="py-6 text-white cursor-pointer" onClick={() => toggleSignup()}>
        {isSignin? "  New to Netflix? Sign up now..." :'Already a regitered? Sign in now'}
        </p>
      </form>
    </div>
  );
}

export default Login
