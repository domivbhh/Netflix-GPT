import React, { useRef, useState } from 'react'
import Header from './Header';
import {checkValidateData} from '../utils/Validation'

const Login = () => {
    const[isSignin,setIsSignin]=useState(true)
    const[error,setError]=useState('')
  
    
    const email=useRef(null);
    const password=useRef(null)



  const toggleSignup=()=>{
    setIsSignin(!isSignin)
  }

  const handleSubmit=(e)=>{
    let a
    e.preventDefault()
    if(isSignin===false){
      console.log('signup called')
      a = checkValidateData(name.current.value,email.current.value,password.current.value);
      setError(a)

    }
    if(isSignin)
      {
      console.log("signin called");

      a=checkValidateData(email.current.value,password.current.value)
      console.log(a)
      setError(a);
      }

      if(a===null){
      email.current.value=''
      password.current.value=''

      }
      console.log(a)
    

    
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
      <form className="p-12 bg-black w-3/12 absolute my-36 mx-auto right-0 left-0 bg-opacity-80" onSubmit={handleSubmit}>
        <h1 className="text-white text-3xl py-4 font-bold">
          {isSignin ? "Sign in" : "Sign up"}
        </h1>
        {/* {
          !isSignin && <input type='text' ref={name} placeholder='Name' className='p-4 text-black
           my-2 w-full bg-slate-300 '/>
        } */}
        <input
          type="text"
          ref={email}
          placeholder="Email address or Phone"
          className="p-4  my-2 w-full bg-slate-300 text-black"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full  bg-slate-300 text-black"
        />
        <p className='text-red-600 font-bold'>{error ? error:''}</p>
        <button type='submit' className="p-2  my-4 bg-red-500 w-full rounded-lg">
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