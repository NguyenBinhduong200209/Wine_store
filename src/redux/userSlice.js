import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    email: "",
    fullname: "",
    token: "",
    username: "",
    id: "",
    phone: "",
    address: "",
    user_id: ""

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRedux: (state, action) => {

            //    state.user =action.payload.data
            state.token = action.payload.token
            state.id = action.payload.user.id
            state.username = action.payload.user.username
            state.fullname = action.payload.user.fullname
            state.email = action.payload.user.email
            console.log(action.payload.user)

        },
        logintoken: (state, action) => {
            console.log(action.payload)
            //    state.user =action.payload.data
            state.token = action.payload.token
            state.id = action.payload.id
            state.username = action.payload.username
            state.fullname = action.payload.fullname
            state.email = action.payload.email

        },
        update: (state, action) => {
            console.log(action.payload)
            //    state.user =action.payload.data
            state.id = action.payload.id
            state.username = action.payload.username
            state.fullname = action.payload.fullname
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.address = action.payload.address

        },
        logoutRedux: (state, action) => {
            state._id = ""
            state.token = ''
            state.username = ''
            state.email = ''
            state.fullname = ''
            Cookies.remove('token')
        },
    }
})

export const { loginRedux, logoutRedux, logintoken, update } = userSlice.actions


export default userSlice.reducer