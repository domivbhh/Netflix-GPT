import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlaying)
    if(!movies) return;

    const mainMovie=movies[5]
    const{original_title,overview,id}=mainMovie
  return (
    <div className='md:pt-0 pt-[30%] bg-black'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBg id={id}/>
      
    </div>
  )
}

export default MainContainer
