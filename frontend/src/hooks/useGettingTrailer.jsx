import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../Store/movieSlice";
import { useEffect } from "react";


const useGettingTrailer = (id) => {
    const dispatch = useDispatch();
  
  
    const getMoviesVids = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await resp.json();
    const filteredTrailer = data.results.filter(
      (ele) => ele.type.toLowerCase() === "trailer"
    );
  
  
  
    const trailer = filteredTrailer.length
      ? filteredTrailer[1]
      : data.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMoviesVids();
  }, []);
  
//   console.log(trailerId);

};

export default useGettingTrailer;
