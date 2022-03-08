import { configureStore } from "@reduxjs/toolkit";
import cardGameSlice from "./game-card-slice";
import cartSlice from "./cart-slice";
import gamesSlice from "./games-slice";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: {
    cardGame: cardGameSlice.reducer,
    cart: cartSlice.reducer,
    games: gamesSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
