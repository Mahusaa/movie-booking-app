
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    value: {
        isAuth: false,
        balance: 400000,
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
                }
            }
        },
        balancing: (state, action) =>{
            return {
                value: {
                    isAuth: state.value.isAuth,
                    balance: state.value.balance - action.payload
                }
            }
        }
    }
});

export const { login, logOut, balancing } = auth.actions
export default auth.reducer;