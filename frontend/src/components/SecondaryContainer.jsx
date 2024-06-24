//Movie list
    // -Nowplaying
    // -Trending
    // -Popular


import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
const movies=useSelector((state)=>state.movie)
const{popularPlaying,nowPlaying,topRated,upComing}=movies
// console.log('nowPlaying',nowPlaying)
// console.log('upcoming',upComing)
// console.log('topRated',topRated)
// console.log('popularPlaying',popularPlaying)


  return (
    <div className="bg-black">
      <div className="-mt-32 z-30 relative w-screen bg-black bg-opacity-5">
        <MovieList title={"Now Playing"} movies={nowPlaying} />
        <MovieList title={"Popular"} movies={popularPlaying} />
        <MovieList title={"Trending"} movies={topRated} />
        <MovieList title={"Upcoming"} movies={upComing} />
      </div>
    </div>
  );
}

export default SecondaryContainer
