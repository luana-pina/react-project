import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import cardGameSlice from "./game-card-slice";
import gamesSlice from "./games-slice";
import popupSlice from "./popup-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    games: gamesSlice.reducer,
    cardGame: cardGameSlice.reducer,
    popup: popupSlice.reducer,
  },
});

export default store;
