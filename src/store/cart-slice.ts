import { createSlice } from "@reduxjs/toolkit";
import { ICardGameCart } from "../shared/interfaces/GamesInterfaces";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    min_cart_value: NaN,
    cardGames: Array<ICardGameCart>(),
    totalAmound: 0,
  },
  reducers: {
    getMinCartValue(state, action) {
      const { min_cart_value } = action.payload;
      state.min_cart_value = min_cart_value;
    },
    addCardToCart(state, action) {
      const card: ICardGameCart = action.payload;
      state.cardGames.push(card);
      state.totalAmound += card.price;
    },
    removeCardToCart(state, action) {
      const { cardId } = action.payload;
      const newListItems = [...state.cardGames];
      newListItems.forEach((item, index) => {
        if (item.id === cardId) {
          newListItems.splice(index, 1);
          state.totalAmound -= item.price;
        }
      });
      state.cardGames = newListItems;
    },
    clearCart(state) {
      state.cardGames = Array<ICardGameCart>();
      state.totalAmound = 0;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
