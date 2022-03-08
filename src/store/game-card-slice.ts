import { createSlice } from "@reduxjs/toolkit";

const cardGameSlice = createSlice({
  name: "cardGame",
  initialState: {
    card: {
      id: NaN,
      choosen_numbers: Array<number>(),
      price: NaN,
      type: { type: "", id: NaN },
    },
  },
  reducers: {
    addNumber(state, action) {
      const { newNumber } = action.payload;
      state.card.choosen_numbers.push(newNumber);
    },
    removeNumber(state, action) {
      const { number } = action.payload;
      const index = state.card.choosen_numbers.indexOf(number);
      state.card.choosen_numbers.splice(index, 1);
    },
    addCardInfo(state, action) {
      const { id, price, type } = action.payload;
      state.card.id = id;
      state.card.price = price;
      state.card.type = type;
    },
    clearCard(state) {
      state.card.id = NaN;
      state.card.price = NaN;
      state.card.type.id = NaN;
      state.card.type.type = "";
      state.card.choosen_numbers = [];
    },
  },
});

export const cardGameActions = cardGameSlice.actions;

export default cardGameSlice;
