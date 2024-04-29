import {createSlice} from "@reduxjs/toolkit";


const initialState: {isAuth: boolean} = {
    isAuth: true,
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

}); // Create a slice