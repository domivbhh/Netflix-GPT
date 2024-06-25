import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
            showGPT:false,
            movies:null
    },
    reducers:{
        toggleGPTsearch:(state,action)=>{
                state.showGPT=!state.showGPT
        },
        addMovie:(state,action)=>{
            state.movies=action.payload
            console.log(state.movies)
        }

    }
})


export default gptSlice.reducer
export const{toggleGPTsearch,addMovie}=gptSlice.actions