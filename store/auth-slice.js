import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
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
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "djfehe",
                    isModerator: false,
                }
            }
        }
    }
});

export const { login, logOut } = auth.actions
export default auth.reducer;