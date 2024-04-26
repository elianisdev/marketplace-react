import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartAddState {
    id: string | number,
    name: string,
    info: string,
    image: string,

}
interface CartRemoveState {
  id: number,
}

// Aca coloco los valores se va a trabajar como un array de objetos y en este caso se deja vacio
const initialState: CartAddState[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartAddState>) => {
            const { id } = action.payload
        if (
            state.length === 0 ||
            state.filter((item) => item.id === id).length === 0
        ) {
            state.push(action.payload)
        }
        },
        removeToCart: (state, action: PayloadAction<CartRemoveState>) => {

        }
    },
})

export const { addToCart, removeToCart  } = cartSlice.actions
