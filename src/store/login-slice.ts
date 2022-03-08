import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
  },
  reducers: {
    isLoginHandler(state) {
      const token = localStorage.getItem("bearer");
      if (token) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
