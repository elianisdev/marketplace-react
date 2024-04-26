import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
    id: string | number,
    name: string,
    info: string,
    image: string,
}

// Aca coloco los valores se va a trabajar como un array de objetos y en este caso se deja vacio
const initialState: CartState[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartState>) => {

        },
        removeToCart: (state, action: PayloadAction<CartState>) => {

        }
    },
})

export const {  } = cartSlice.actions
