import { createSlice } from "@reduxjs/toolkit";
const popupSlice = createSlice({
  name: "popup",
  initialState: {
    opacity: 0,
    message: "",
    type: "",
  },
  reducers: {
    showPopup(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.opacity = 1;
    },
    hidePopup(state) {
      state.opacity = 0;
      state.message = "";
      state.type = "";
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice;
