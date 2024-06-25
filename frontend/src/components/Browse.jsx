import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlaying  from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularPlaying from '../hooks/usePopularPlaying'
import useUpComingPlaying from '../hooks/useUpcomingPlaying'
import useTopRatedPlaying from '../hooks/useTopRatedPlaying'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const data=useSelector((state)=>state.gpt)
  const{showGPT}=data
 useNowPlaying()
 usePopularPlaying()
 useUpComingPlaying()
 useTopRatedPlaying()
  return (
    <div>
      <Header/>
      {/* <GPTSearch/> */}
      {showGPT? <GPTSearch/> :
      (<>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      )}
    </div>
  )
}

export default Browse
