import { createSlice } from "@reduxjs/toolkit";
import { INewCardGame } from "../shared/interfaces/GamesInterfaces";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cardGames: { games: Array<INewCardGame>() },
    totalAmound: 0,
  },
  reducers: {
    addCardToCart(state, action) {
      const card = action.payload;
      state.cardGames.games.push(card);
      console.log(state);
    },
    removeCardToCart() {},
  },
});

export default cartSlice;
