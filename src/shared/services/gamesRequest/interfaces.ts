import { IGamesList } from "../../interfaces";

export interface IGames {
  getGames: () => Promise<IGamesList>;
}
