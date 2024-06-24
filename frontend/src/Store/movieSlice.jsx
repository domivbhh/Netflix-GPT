import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        trailerVideo:''
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying=action.payload
            // console.log(state.nowPlaying)
        },
        addMovieTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})


export default movieSlice.reducer
export const {addNowPlayingMovies,addMovieTrailer}=movieSlice.actions