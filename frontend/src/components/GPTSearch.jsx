import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTMovieSugg from './GPTMovieSugg'
import { bg } from "../utils/constants";


const GPTSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-20">
        <img src={bg} alt="" className="h-screen w-full object-cover" />
      </div>

      <GPTsearchBar />
      <GPTMovieSugg />
    </div>
  );
}

export default GPTSearch
