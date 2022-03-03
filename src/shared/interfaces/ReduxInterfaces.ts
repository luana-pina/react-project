import { ICardGame, IGame, INewCardGame } from ".";

export interface IRootState {
  cart: cart;
  games: games;
}

interface cart {
  cardGames: { games: Array<INewCardGame> };
  totalAmound: 0;
}
interface games {
  gamesType: Array<IGame>;
  recentGames: Array<ICardGame>;
  gameSelected: {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
  };
}
