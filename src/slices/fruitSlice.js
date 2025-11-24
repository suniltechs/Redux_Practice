import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits: []
}

export const fruitSlice = createSlice({
    name:'fruits',
    initialState,
    reducers:{
        setFruits: (state, action) => {
            state.fruits = [...state.fruits, action.payload]
        },
        deleteFruit: (state, action) => {
            state.fruits = state.fruits.filter((item) => item.id !== action.payload)
        },
        editFruit: (state, action) => {
            state.fruits = state.fruits.map((item) => item.id === action.payload.id ? action.payload : item)
        }
    }
})

export const {setFruits, deleteFruit, editFruit} = fruitSlice.actions

export default fruitSlice.reducer