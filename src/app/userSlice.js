import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: "",
    token: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userConnected(state, action){
            state.push(action.payload)
        }
    }
})

export const selectUser = (state) => state.user

export const {userConnected} = userSlice.actions;

export default userSlice.reducer