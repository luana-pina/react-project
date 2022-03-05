import { createSlice } from "@reduxjs/toolkit";

const cardGameSlice = createSlice({
  name: "cardGame",
  initialState: {
    clear: false,
    card: {
      id: NaN,
      choosen_numbers: "",
      price: NaN,
      type: { type: "", id: NaN },
    },
  },
  reducers: {
    addCardInfo(state, action) {
      const { id, newNumbers, price, type } = action.payload;
      state.card.id = id;
      state.card.price = price;
      state.card.type = type;
      state.card.choosen_numbers = newNumbers
        .sort((a: number, b: number) => a - b)
        .join(", ");
    },
    clearCard(state) {
      state.card.id = NaN;
      state.card.price = NaN;
      state.card.type.id = NaN;
      state.card.type.type = "";
      state.card.choosen_numbers = "";
      state.clear = !state.clear;
    },
  },
});

export const cardGameActions = cardGameSlice.actions;

export default cardGameSlice;
