import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import suggestionSlice from "./suggestionSlice";
import LiveChatSlice from "./LiveChatSlice";
//suggestionSlice = suggestionSlice.reducer  (any name for default import)
const store=configureStore({
  reducer:{
    sidebar:AppSlice,
    suggestion:suggestionSlice,
    liveChat:LiveChatSlice,
  }
})

export default store;