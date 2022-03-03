import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import gamesSlice from "./games-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, games: gamesSlice.reducer },
});

export default store;
