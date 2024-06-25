import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovie } from "../Store/movieSlice";

const useTopRatedPlaying = () => {
  const dispatch = useDispatch();
     const { topRated } = useSelector((state) => state.movie);


  async function getNowPlaying() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const resp = await data.json();
    //  console.log(resp.results);
    dispatch(addTopRatedMovie(resp.results));
  }

  useEffect(() => {
    !topRated && getNowPlaying();
  }, []);
};

export default useTopRatedPlaying;
