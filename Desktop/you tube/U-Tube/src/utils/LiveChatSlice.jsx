import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice=createSlice({
    name:"liveChat",
    initialState:{
        message:[],
    },
    reducers:{
        addmessage:(state,action)=>{
            state.message.splice(20,1)
              state.message.unshift(action.payload)
        }
    }
})

export const {addmessage}=liveChatSlice.actions

export default liveChatSlice.reducer