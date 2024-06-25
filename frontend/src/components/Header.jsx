import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { supported_lang } from "../utils/constants";
import { addUser, removeUser } from "../Store/userSlice";
import { image } from '../utils/constants';
import { toggleGPTsearch } from '../Store/gptSlice';
import { changeLang } from '../Store/configSlice';



const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((state)=>state.user)
  const showGPTsearch=useSelector((state)=>state.gpt)
  const handleSignout=()=>{
signOut(auth)
  .then(() => {
    // navigate('/')    
  })
  .catch((error) => {
    // An error happened.
  });

  }
  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log(user)
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    return ()=>{
        unSubscribe()
    }
  }, []);

  const handleGPT=()=>{
    // console.log('gpt toggle')
    dispatch(toggleGPTsearch())
  }

  const handleLangChange=(e)=>{
    // console.log(e.target.value)
    dispatch(changeLang(e.target.value))

  }


  return (
    // <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
    //   <img
    //     src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    //     alt="logo"
    //     className="w-44"
    //   />
    //   {user ?
    //   <div className='flex p-2'>
    //     {/* <img
    //       src={user.profileURL}
    //       alt=""
    //       className='w-10 h-10 my-4'
    //     /> */}
    //     <p className='font-bold bg-red-500 text-white capitalize p-2 m-2 text-xl'>Hi {user.displayName}</p>
    //     <button className='font-bold text-white' onClick={()=>handleSignout()}>Sign out</button>
    //   </div>
    //   :''}
    // </div>
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex md:justify-between mx-auto items-center flex-col md:flex-row">
      <div className='flex'>

      <img
        src={image}
        alt="logo"
        className="w-28 md:w-36 lg:w-44 mx-auto md:mx-0" // Adjust width based on different screen sizes
        /> 
        <span className='text-2xl text-red-600 mt-2 font-bold border-black shadow-md md:mt-5 md:font-extrabold'>Movie Search</span>
      </div>
      {user ? (
        <div className="flex p-2 items-center">
          {showGPTsearch.showGPT && (
            <select
              className="p-2 bg-gray-900 text-white"
              onChange={(e) => handleLangChange(e)}
            >
              {supported_lang.map((ele, ind) => {
                return <option key={ind}>{ele.identifier}</option>;
              })}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 bg-red-600 text-white rounded-md mx-4 my-2"
            onClick={handleGPT}
          >
            {showGPTsearch.showGPT ? "Home" : "Search Movie"}
          </button>
          {/* Uncomment and adjust user profile image size if needed */}
          {/* <img
        src={user.profileURL}
        alt=""
        className='w-10 h-10 my-4 rounded-full'
      /> */}
          <p className="font-bold bg-red-500 text-white capitalize rounded-md p-1 m-2 text-base md:text-xl">
            Hi {user.displayName}
          </p>
          <button
            className="font-bold text-white text-sm md:text-base"
            onClick={() => handleSignout()}
          >
            Sign out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header
