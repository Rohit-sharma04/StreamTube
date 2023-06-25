import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice({
    name:'suggestion',
    initialState:{
        suggestionCache:{}
    },
    reducers:{
        addSuggestionCache:(state,action)=>{
            
          state.suggestionCache=  { ...state.suggestionCache ,...action.payload}
        //   state.suggestionCache=Object.assign(state.,action.payload)
        }

    }
})

export const {addSuggestionCache} =suggestionSlice.actions
export default suggestionSlice.reducer