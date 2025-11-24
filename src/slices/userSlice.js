import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        deleteUsers: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        updateUsers: (state, action) => {
            state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user)
        }
    }
})

export const {setUsers, deleteUsers, updateUsers} = userSlice.actions

export default userSlice.reducer