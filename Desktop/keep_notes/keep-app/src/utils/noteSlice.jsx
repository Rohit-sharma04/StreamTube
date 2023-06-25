import { createSlice } from "@reduxjs/toolkit";

const noteSlice=createSlice({
  name:'note',
  initialState:{
    noteCollection:[]
  },
  reducers:{
    addItem:(state,action)=>{
      state.noteCollection.push(action.payload)
    },
    removeItem:(state,action)=>{
        state.noteCollection.splice(action.payload,1)
    }
  }

})
export const {addItem,removeItem}=noteSlice.actions
export default noteSlice.reducer 