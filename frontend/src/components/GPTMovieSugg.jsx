import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN } from '../utils/constants'

const GPTMovieSugg = () => {
  const {movies}=useSelector((state)=>state.gpt)
  // console.log(movies)
  if(!movies){
    return null
  }
  return (
    movies.length>0 && <div className='p-4 m-4 bg-gradient-to-r from-red-400 to-black text-white w-3/4 mx-auto bg-opacity-90'>
      {
        movies.map((ele)=>{
          return (
            <div className=' my-28 md:my-10' key={ele.id}>
            {ele.poster_path ?
            <div className="md:flex md:justify-evenly">
              <div className='flex flex-col flex-wrap ml-5 md:flex-row gap-5 md:justify-evenly md:w-full'>
              <div className='md:w-8 w-60'>
              <h1 className='font-bold w-36 md:w-20'>{ele.title}</h1>         
              </div>
              <div className='md:flex flex-row gap-9'>
              <div>
              <img src={IMG_CDN + ele.poster_path} alt="" className="w-44" />  
              </div>
              <div className='w-40 md:w-80 h-30'>
                <h2 className=' font-medium'><span className='font-extrabold md:text-md text-sm'>Overview--</span>{ele.overview}</h2>
                <p className='font-bold'>Released Date:{ele.release_date}</p>
              </div>
              </div>
              </div>
            </div>:""}
            </div>
          );
         }) }
      </div>
      )
}

export default GPTMovieSugg
