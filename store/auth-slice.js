
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    isAuth: false,
    userData: {
        name: '',
        age: '',
        email: '',
    }
}

export const auth = createSlice({
    name: "auth",
    initialState: initalState,
    reducers: {
        logOut: () => {
            return initalState
        },
        login: (state, action) => {
            return {
                isAuth: true,
                userData: {
                    name: action.payload,
                    age: action.payload,
                    email: action.payload,
                }
            }
        },
    }
});

export const { login, logOut, } = auth.actions
export default auth.reducer;