import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import{RouterProvider, createBrowserRouter, useNavigate} from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import Error from './Error';


const Body = () => {
    // const dispatch=useDispatch()
    // const navigate=useNavigate()
    const appRouter=createBrowserRouter([
        
        {
            path:'/',
            element:<Login/>,
        
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        
    ])

    
    




  return (
    <div>
        <RouterProvider router={appRouter}/>   
    </div>
  )
}

export default Body
