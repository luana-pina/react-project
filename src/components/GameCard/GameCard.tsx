import React from "react";
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
  item: {
    id: string;
    gameId: string;
    gameName: string;
    color: string;
    price: number;
    selectedNumbers: number[];
  };
  delete?: Function | undefined;
}> = (props) => {
  const { item } = props;

  const onDelete = () => {
    if (props.delete) {
      props.delete(item.id);
    }
  };

  return (
    <CardWrapper>
      {props.delete && <DeleteIcon size={25} onClick={onDelete} />}
      <CardContent color={item.color}>
        <SelectedNumbers>{item.selectedNumbers.join(", ")}</SelectedNumbers>
        <InfoCard>
          <GameName color={item.color}>{item.gameName}</GameName>
          <Price>{item.price}</Price>
        </InfoCard>
      </CardContent>
    </CardWrapper>
  );
};

export default GameCard;
