import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN } from '../utils/constants'

const GPTMovieSugg = () => {
  const {movies}=useSelector((state)=>state.gpt)
  console.log(movies)
  if(!movies){
    return null
  }
  return (
    <div className='p-4 m-4 bg-gradient-to-r from-red-400 to-black text-white w-3/4 mx-auto bg-opacity-90'>
      {
        movies.map((ele)=>{
          return (
            <div className='my-10'>
            {ele.poster_path ?<div className="flex justify-evenly">
              <div className='w-8'>
              <h1 className='font-bold'>{ele.title}</h1>
              </div>
              <div className=''>
                <img src={IMG_CDN + ele.poster_path} alt="" className="w-44" />
              </div>
              <div className='w-80 h-30'>
                <h2 className=' font-medium'><span className='font-extrabold text-md'>Overview--</span>{ele.overview}</h2>
                <p className='font-bold'>Released Date:{ele.release_date}</p>
              </div>
            </div>:""}
            </div>
          );
         }) }
      </div>
      )
}

export default GPTMovieSugg
