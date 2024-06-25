import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
// const movie = movies;
// console.log(movies)
  return (
    <div className='bg-black'>
    {movies ?
    <div className="px-6 my-2 bg-black">
      <h1 className="text-2xl py-6 font-bold text-red-500 bg-gradient-to-r from-black to-red-500">{title}</h1>
      <div className="flex">
        <div className="flex flex-wrap gap-3 justify-evenly">
          {movies && movies.map((ele) => <MovieCard ele={ele} key={ele.id} />)}
        </div>
      </div>
    </div>:''
    }
    </div>
  );
}

export default MovieList
