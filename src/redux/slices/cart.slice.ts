import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartState {
    value: number
}

// Define the initial state using that type
const initialState: CartState = {
    value: 0,
}

export const cartSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartState>) => {

        },
        removeToCart: (state, action: PayloadAction<CartState>) => {

        }
    },
})

export const {  } = cartSlice.actions
