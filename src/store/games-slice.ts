import { createSlice } from "@reduxjs/toolkit";
import { IGame, ICardGame } from "../shared/interfaces";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    gamesType: Array<IGame>(),
    recentGames: Array<ICardGame>(),
    gameSelected: {},
  },
  reducers: {
    getSelectedGame(state, action) {
      const { requestData, gameId } = action.payload;
      state.gamesType = requestData;
      if (gameId) {
        requestData.forEach((item: IGame) => {
          if (item.id === gameId) {
            state.gameSelected = item;
          }
        });
      }
    },
    getRecentGames(state, action) {
      const { requestData } = action.payload;
      state.recentGames = requestData;
    },
  },
});

export const gamesActions = gamesSlice.actions;

export default gamesSlice;
