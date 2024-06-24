import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Store/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const user=useSelector((state)=>state.user)
  const handleSignout=()=>{
signOut(auth)
  .then(() => {
    navigate('/')    
  })
  .catch((error) => {
    // An error happened.
  });

  }


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user ? 
      <div className='flex p-2'>
        {/* <img
          src={user.profileURL}
          alt=""
          className='w-10 h-10 my-4'
        /> */}
        <p className='font-bold bg-red-500 text-white capitalize p-2 m-2 text-xl'>Hi {user.displayName}</p>
        <button className='font-bold text-white' onClick={()=>handleSignout()}>Sign out</button>
      </div>
      :''}
    </div>
  );
}

export default Header
