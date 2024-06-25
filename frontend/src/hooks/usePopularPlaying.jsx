import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovie } from "../Store/movieSlice";

const usePopularPlaying = () => {
  const dispatch = useDispatch();
     const { popularPlaying } = useSelector((state) => state.movie);

  async function getNowPlaying() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const resp = await data.json();
    //  console.log(resp.results);
    dispatch(addPopularMovie(resp.results));
  }

  useEffect(() => {
    !popularPlaying && getNowPlaying();
  }, []);
};

export default usePopularPlaying;
