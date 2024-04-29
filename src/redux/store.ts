import { configureStore } from '@reduxjs/toolkit'
import {authSlice, cartSlice} from './slices'


export const store = configureStore({
    reducer: {
      cartReducer : cartSlice.reducer,
        authReducer: authSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch