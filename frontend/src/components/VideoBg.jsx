import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useGettingTrailer from '../hooks/useGettingTrailer';


const VideoBg = ({id}) => {
  const trailerId = useSelector((state) => state.movie.trailerVideo);
  useGettingTrailer(id)
  return (
    <div>
      <iframe
        className='w-screen aspect-video h-screen'
        src={"https://www.youtube.com/embed/"+trailerId?.key+"?&autoplay=1&mute=true"}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>
    </div>
  );
}

export default VideoBg



// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWU5Y2MwN2MzZjRkYzAwNWIyZjdlNmRlNDBlYzE5NiIsIm5iZiI6MTcxOTIxMzI4MS4xNjMzNDgsInN1YiI6IjYyN2E4MTdlYWJkZWMwMDA2NzcxNTVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w4M6BFNzfyLyjEUUjay9_ZPKkKMm6UxjaGPyBqJcmjg",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));