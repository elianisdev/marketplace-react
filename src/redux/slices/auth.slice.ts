import {createSlice} from "@reduxjs/toolkit";


const initialState: {isAuth: boolean} = {
    isAuth: false,
};  // Initial state

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        },
    },

}); // Create a

export const {login, logout} = authSlice.actions;