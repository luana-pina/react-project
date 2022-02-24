import React from "react";
import { Content } from "../../pages/Games/styles";
import { GameButton } from "./styles";

type Game = {
  id: string;
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
};

const GamesButtons: React.FC<{ gamesList: Game[] }> = (props) => {
  const buttonsList = props.gamesList.map((item) => {
    return (
      <GameButton to={`/games/${item.id}`} color={item.color} key={item.id}>
        {item.type}
      </GameButton>
    );
  });

  return <Content>{buttonsList}</Content>;
};

export default GamesButtons;
