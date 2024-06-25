import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";

   
  function useFetchSearchMovie(searchvalue){
    const[val,setVal]=useState([])
    async function fetchs() {
      const movies = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchvalue}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const resp = await movies.json();
      setVal(resp)
    };
    fetchs()
    return val

    }
    

export default useFetchSearchMovie
    
    