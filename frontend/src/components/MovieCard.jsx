import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ele}) => {
    // console.log(ele)
    const{poster_path}=ele
  return (
    <div className="w-36 pr-5  hover:scale-150">
      <img src={IMG_CDN + poster_path} alt="" className="" />
    </div>
  );
}

export default MovieCard
