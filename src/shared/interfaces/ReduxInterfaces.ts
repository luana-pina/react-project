import { ICardGame, IGame, ICardGameCart } from ".";

export interface IRootState {
  cart: cart;
  games: games;
  cardGame: card;
  popup: popup;
}

interface popup {
  opacity: number;
  message: string;
  type: string;
}
interface card {
  clear: boolean;
  card: {
    id: number;
    choosen_numbers: string;
    price: number;
    type: { type: string; id: number };
  };
}
interface cart {
  cardGames: Array<ICardGameCart>;
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
