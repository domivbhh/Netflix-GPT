import React from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux';

const GPTsearchBar = () => {
  const lan = useSelector((state) => state.config);
  // console.log(lan.lang)
  return (
    <div className="pt-[8%] flex justify-center">
      <form action="" className="m-6 bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-10"
          placeholder={lang[lan.lang].gptSearch}
        />
        <button className="py-2 px-4 bg-red-700 col-span-2 m-4 text-white rounded-md">
          {lang[lan.lang].search}
        </button>
      </form>
    </div>
  );
}

export default GPTsearchBar
