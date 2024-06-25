import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
            showGPT:false
    },
    reducers:{
        toggleGPTsearch:(state,action)=>{
                state.showGPT=!state.showGPT
        },

    }
})


export default gptSlice.reducer
export const{toggleGPTsearch}=gptSlice.actions