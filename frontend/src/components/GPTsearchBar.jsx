import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux';
// import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import useFetchSearchMovie from '../hooks/useFetchSearchMovie';
import { addMovie } from '../Store/gptSlice';


const GPTsearchBar = () => {
  const lan = useSelector((state) => state.config);
    const searchText=useRef(null)
  // const movies=useFetchSearchMovie(searchText?.current?.value)
  const dispatch=useDispatch()

  // console.log(movies)

  const handleGPTSearch=async()=>{
    // //make an api call to GPT API to get the movie results
    //   const gptQuery='Act as a Movie Recommendation System and suggest some movie for the query'+searchText.current.value+'only give me name of 6 movies,comma separated like the exampe result given ahead example result:gadar,kgf,kaala,bigil,kaithi'
    //   const results= await openai.chat.completions.create({
    //     messages: [{ role: "user", content:gptQuery }],
    //     model: "gpt-3.5-turbo",
    // })
    // console.log(results.choices)
 const movies = await fetch(
   `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
   API_OPTIONS
 );
 const resp = await movies.json();
console.log(resp)
      // movies().then((res)=>console.log(res)).catch((err)=>console.log(err))

    dispatch(addMovie(resp.results))
  
    

  }



  return (
    <div className="md:pt-[10%] pt-[40%] flex justify-center">
      <form action="" className="px-5 w-[80%] md:w-3/4 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          className="p-4 m-4 col-span-10 w-78 rounded-md md:w-[90%] md:h-16"
          placeholder={lang[lan.lang].gptSearch}
          ref={searchText}
        />
        <button className="md:py-2 md:w-24  bg-red-700 col-span-2 md:m-5 my-5 mr-16 w-14 text-white rounded-md" onClick={()=>handleGPTSearch()}>
          {lang[lan.lang].search}
        </button>
      </form>
    </div>
  );
}


export default GPTsearchBar
