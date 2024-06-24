import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        trailerVideo:'',
        popularPlaying:null,
        topRated:null,
        upComing:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying=action.payload
            // console.log(state.nowPlaying)
        },
        addMovieTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovie:(state,action)=>{
            state.popularPlaying=action.payload
        },
        addTopRatedMovie:(state,action)=>{
            state.topRated=action.payload
        },
        
        addUpcomingMovie:(state,action)=>{
            state.upComing=action.payload
        }
    }
})


export default movieSlice.reducer
export const {addNowPlayingMovies,addMovieTrailer,addPopularMovie,addTopRatedMovie,addUpcomingMovie}=movieSlice.actions