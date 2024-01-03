import { createSlice } from '@reduxjs/toolkit'



const initialState = []

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.push({
                imagen: action.payload.imagen,
                title: action.payload.title,
                texto: action.payload.texto,
                valor: action.payload.valor,
                id: action.payload.id
            })
        },
        deleteItem: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload);

            if (index !== -1) {
                state.splice(index, 1);

            }
        }
    },


})

// Action creators are generated for each case reducer function
export const { increment, deleteItem, } = counterSlice.actions

export default counterSlice.reducer