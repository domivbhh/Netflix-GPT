import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTMovieSugg from './GPTMovieSugg'
import { bg } from "../utils/constants";


const GPTSearch = () => {
  return (
    <div>

    <div className=" fixed inset-0 -z-10 md:-z-20">
        <img src={bg} alt="" className="h-full w-full object-cover" />
      </div>

    <div className=''>
      <GPTsearchBar />
      <GPTMovieSugg />
    </div>

    </div>
  );
}

export default GPTSearch
