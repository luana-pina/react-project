import React from "react";
import Card from "../UI/Card/Card";
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
  game: string;
  color: string;
  price: number;
  selectedNumbers: number[];
}> = (props) => {
  const { selectedNumbers, color, game, price } = props;
  return (
    <CardWrapper>
      <DeleteIcon size={20} />
      <CardContent color={color}>
        <SelectedNumbers>{selectedNumbers.join(", ")}</SelectedNumbers>
        <InfoCard>
          <GameName color={color}>{game}</GameName>
          <Price>{price}</Price>
        </InfoCard>
      </CardContent>
    </CardWrapper>
  );
};

export default GameCard;
