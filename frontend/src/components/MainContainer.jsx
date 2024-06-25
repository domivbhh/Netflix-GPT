import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlaying)
    if(!movies) return;

    const mainMovie=movies[15]
    const{original_title,overview,id}=mainMovie
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBg id={id}/>
      
    </div>
  )
}

export default MainContainer
