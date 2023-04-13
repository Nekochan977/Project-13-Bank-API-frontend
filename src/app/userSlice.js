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
export default userSlice.reducer