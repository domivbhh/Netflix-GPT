import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bg } from "../utils/constants";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [error, setError] = useState("");
  // const dispatch=useDispatch()
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignup = () => {
    setIsSignin(!isSignin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let a;
    a = checkValidateData(email.current.value, password.current.value);
    a;
    setError(a);
    if (isSignin === false && !a) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user)
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              // console.log(uid, displayName, email, photoURL);

              dispatch(
                addUser({
                  uid,
                  email,
                  photoURL,
                  displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
          // ..
        });
    }
    if (isSignin && !a) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("login user", user);
          if (user) {
            navigate("/browse");
          }

          // navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }

    // console.log(a)
  };

  return (
    <div className="relative">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bg} alt="" className="h-screen w-full object-cover" />
      </div>

      {/* Form Container */}
      <form
        className="absolute top-28 left-1/2 transform -translate-x-1/2  p-8 bg-black bg-opacity-70 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-3xl py-4 font-bold text-center">
          {isSignin ? "Sign in" : "Sign up"}
        </h1>

        {/* Name Input (only for sign up) */}
        {!isSignin && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-4 my-2 w-full bg-slate-300 text-black rounded-lg"
          />
        )}

        {/* Email Input */}
        <input
          type="text"
          ref={email}
          placeholder="Email address or Phone"
          className="p-4 my-2 w-full bg-slate-300 text-black rounded-lg"
        />

        {/* Password Input */}
        <input
          type="password"
          ref={password}
          autoComplete="true"
          placeholder="Password"
          className="p-4 my-2 w-full bg-slate-300 text-black rounded-lg"
        />

        {/* Error Message */}
        {error && <p className="text-red-600 font-bold">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="p-2 my-4 bg-red-500 w-full rounded-lg">
          {isSignin ? "Sign in" : "Sign up"}
        </button>

        {/* Toggle Sign Up/Sign In Link */}
        <p
          className="py-6 text-white text-center cursor-pointer"
          onClick={() => toggleSignup()}
        >
          {isSignin
            ? "New to Netflix? Sign up now..."
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>

    // <div>
    //   <Header />
    //   <div className="absolute">
    //     <img
    //       src="https://wallpapercave.com/wp/wp1917128.jpg"
    //       alt=""
    //       className="h-screen w-screen object-cover"
    //     />
    //   </div>
    //   <form className="p-12 bg-black w-3/12 absolute my-36 mx-auto right-0 left-0 bg-opacity-80" onSubmit={handleSubmit}>
    //     <h1 className="text-white text-3xl py-4 font-bold">
    //       {isSignin ? "Sign in" : "Sign up"}
    //     </h1>
    //     {
    //       !isSignin && <input type='text' ref={name} placeholder='Name' className='p-4 text-black
    //        my-2 w-full bg-slate-300 '/>
    //     }
    //     <input
    //       type="text"
    //       ref={email}
    //       placeholder="Email address or Phone"
    //       className="p-4  my-2 w-full bg-slate-300 text-black"
    //     />
    //     <input
    //       type="password"
    //       ref={password}
    //       autoComplete='true'
    //       placeholder="Password"
    //       className="p-4 my-2 w-full  bg-slate-300 text-black"
    //     />
    //     <p className='text-red-600 font-bold'>{error ? error:''}</p>
    //     <button type='submit' className="p-2  my-4 bg-red-500 w-full rounded-lg">
    //       {isSignin ? "Sign in" : "Sign up"}
    //      </button>
    //     <p className="py-6 text-white cursor-pointer" onClick={() => toggleSignup()}>
    //     {isSignin? "  New to Netflix? Sign up now..." :'Already a regitered? Sign in now'}
    //     </p>
    //   </form>
    // </div>
  );
};

export default Login;

// import { getAuth, updateProfile } from "firebase/auth";
// const auth = getAuth();
// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg",
// })
//   .then(() => {
//     // Profile updated!
//     // ...
//   })
//   .catch((error) => {
//     // An error occurred
//     // ...
//   });
