export interface ICardGame {
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: number[];
  price: number;
  created_at: Date;
  type: GameType;
}
export interface ICardGameAccount {
  id: number;
  choosen_numbers: number[];
  price: number;
  type: { id: number };
}
export interface ICardGameCart {
  id: number;
  choosen_numbers: number[];
  price: number;
  type: GameType;
}
export interface ICartGamesBody {
  game_id: number;
  numbers: number[];
}
export interface INewGameBody {
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

export interface IGame {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

interface GameType {
  id: number;
  type: string;
}
export interface IGamesList {
  min_cart_value: number;
  types: IGame[];
}
