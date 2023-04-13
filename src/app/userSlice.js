import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: "",
    token: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        },
        setUser(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectUser = (state) => state.user

export const {setToken, setUser} = userSlice.actions

export default userSlice.reducer