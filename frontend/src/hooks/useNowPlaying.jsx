import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Store/movieSlice";



const useNowPlaying=()=>{
     const dispatch = useDispatch();
     const{nowPlaying}=useSelector((state)=>state.movie)
    //  console.log(nowPlaying)



     async function getNowPlaying() {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?language?page=1",
         API_OPTIONS
       );
       const resp = await data.json();
       console.log(resp.results);
       dispatch(addNowPlayingMovies(resp.results))
     }

     useEffect(() => {
       !nowPlaying && getNowPlaying();
     }, []);


    }

    export default useNowPlaying