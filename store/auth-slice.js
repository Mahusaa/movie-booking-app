import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  isAuth: false,
  userData: null,
};

export const auth = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false ;
      state.userData = null ;
    },
    login: (state, action) => {
        state.isAuth = true ;
        state.userData =  action.payload
    }
  },
});

export const { login, logOut } = auth.actions;
export default auth.reducer;
