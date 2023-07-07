import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";


export const store =  configureStore({
    reducer: {
        authReducer
    }
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;