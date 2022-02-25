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
  game: string;
  color: string;
  price: number;
  selectedNumbers: number[];
  canDelete?: boolean;
}> = (props) => {
  const { selectedNumbers, color, game, price } = props;
  return (
    <CardWrapper>
      {props.canDelete && <DeleteIcon size={25} />}
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
