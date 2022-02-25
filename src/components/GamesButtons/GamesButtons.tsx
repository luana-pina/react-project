import React from "react";
import { useParams } from "react-router-dom";
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

const GamesButtons: React.FC<{
  gamesList: Game[];
  width?: string | undefined;
  height?: string | undefined;
  to: Function;
}> = (props) => {
  const params = useParams();

  const buttonsList = props.gamesList.map((item) => {
    return (
      <GameButton
        width={props.width}
        height={props.height}
        color={item.color}
        active={params.gameId === item.id || params["*"]?.match(item.id)}
        key={item.id}
        onClick={() => props.to(item.id)}
      >
        {item.type}
      </GameButton>
    );
  });

  return <Content>{buttonsList}</Content>;
};

export default GamesButtons;
