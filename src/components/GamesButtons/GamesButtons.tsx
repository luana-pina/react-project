import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Content } from "./styles";
import { IRootState } from "../../shared/interfaces";
import { GameButton } from "./styles";

const GamesButtons: React.FC<{
  width?: string | undefined;
  height?: string | undefined;
  to: Function;
}> = (props) => {
  const params = useParams();
  const gameId = Number(params.gameId);
  const gamesList = useSelector((state: IRootState) => state.games.gamesType);

  const buttonsList = gamesList.map((item) => {
    return (
      <GameButton
        width={props.width}
        height={props.height}
        color={item.color}
        active={gameId === item.id || params["*"]?.match(`${item.id}`)}
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
