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
      requestData.forEach(
        (item: {
          id: number;
          user_id: number;
          game_id: number;
          choosen_numbers: string;
          price: number;
          created_at: Date;
          type: { id: number; type: string };
        }) => {
          const numbersArray: number[] = [];
          const stringsArray = item.choosen_numbers.split(",");
          stringsArray.forEach((item) => {
            numbersArray.push(Number(item));
          });
          state.recentGames.push({ ...item, choosen_numbers: numbersArray });
        }
      );
    },
    clearData(state) {
      state.gamesType = Array<IGame>();
      state.recentGames = Array<ICardGame>();
      state.gameSelected = {};
    },
  },
});

export const gamesActions = gamesSlice.actions;

export default gamesSlice;
