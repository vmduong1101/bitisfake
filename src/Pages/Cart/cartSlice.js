import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const { id } = payload
            const itemExists = state.find((item) => item.id === id)
            if (itemExists) {
                return state.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return
                })
            } else {
                state.push({
                    ...payload
                })
            }
        },
        increment: (state, { payload }) => {

            return state.map((item) => {
                if (item.id === payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            })
        },
        decrement: (state, { payload }) => {
            return state.map((item) => {
                if (item.id === payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else {
                    return item
                }
            })
        },
        deleted: (state, { payload }) => {
            return state.filter((item) => item.id !== payload)
        },
        clear: () => {
            return []
        }
    }
})
export const { addToCart, increment, decrement, deleted, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer