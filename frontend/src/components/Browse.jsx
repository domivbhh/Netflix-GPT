import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlaying  from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularPlaying from '../hooks/usePopularPlaying'
import useUpComingPlaying from '../hooks/useUpcomingPlaying'
import useTopRatedPlaying from '../hooks/useTopRatedPlaying'

const Browse = () => {
 useNowPlaying()
 usePopularPlaying()
 useUpComingPlaying()
 useTopRatedPlaying()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse
