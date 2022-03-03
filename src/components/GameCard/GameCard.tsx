import React from "react";
import { useSelector } from "react-redux";
import { ICardGame, IRootState } from "../../shared/interfaces";
import {
  CardContent,
  CardWrapper,
  DeleteIcon,
  GameName,
  InfoCard,
  Price,
  SelectedNumbers,
} from "./styles";

const GameCard: React.FC<{
  item: ICardGame;
  delete?: Function | undefined;
}> = (props) => {
  const { item } = props;
  const gamesList = useSelector((state: IRootState) => state.games.gamesType);

  function getCardColor() {
    gamesList.map((game) => {
      if (game.id === item.type.id) {
        return game.color;
      }
    });
  }

  const onDelete = () => {
    if (props.delete) {
      props.delete(item.id);
    }
  };

  return (
    <CardWrapper>
      {props.delete && <DeleteIcon size={25} onClick={onDelete} />}
      <CardContent color={getCardColor()}>
        <SelectedNumbers>{item.choosen_numbers}</SelectedNumbers>
        <InfoCard>
          <GameName color={getCardColor()}>{item.type.type}</GameName>
          <Price>{item.price}</Price>
        </InfoCard>
      </CardContent>
    </CardWrapper>
  );
};

export default GameCard;
