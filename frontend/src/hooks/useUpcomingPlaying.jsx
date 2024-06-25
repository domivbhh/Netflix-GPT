import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovie, addUpcomingMovie } from "../Store/movieSlice";

const useUpComingPlaying = () => {
  const dispatch = useDispatch();
  async function getNowPlaying() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const resp = await data.json();
    // console.log(resp.results);
    dispatch(addUpcomingMovie(resp.results));
  }

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useUpComingPlaying;
