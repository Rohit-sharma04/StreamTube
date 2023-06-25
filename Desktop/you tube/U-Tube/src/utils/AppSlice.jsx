import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "sidebar",
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
        openMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})

export const { toggleMenu, closeMenu,openMenu } =AppSlice.actions
export default AppSlice.reducer
