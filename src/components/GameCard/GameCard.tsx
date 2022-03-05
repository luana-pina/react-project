import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICardGame, IRootState } from "../../shared/interfaces";
import { ICardGameCart } from "../../shared/interfaces/GamesInterfaces";
import { cartActions } from "../../store/cart-slice";
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
  item: ICardGame | ICardGameCart;
  delete?: boolean | undefined;
}> = (props) => {
  const { item } = props;
  const gamesList = useSelector((state: IRootState) => state.games.gamesType);
  const [color, setColor] = useState<string>("#868686");
  const dispatch = useDispatch();

  useEffect(() => {
    function getCardColor() {
      gamesList.forEach((game) => {
        if (game.id === item.type.id) {
          setColor(game.color);
        }
      });
    }
    getCardColor();
  }, [gamesList, item]);

  function convertToReal() {
    let valueString = String(item.price);
    let convert;
    let cents;
    if (valueString.indexOf(".") !== -1) {
      convert = valueString.replace(".", ",").split("");
      let separate = convert.indexOf(",");
      cents = convert.splice(separate);
      while (cents.length < 3) {
        cents.push("0");
      }
      convert.push(cents.join(""));
      return convert.join("");
    }
    cents = ",00";
    valueString += cents;
    return valueString;
  }

  const onDelete = () => {
    if (props.delete) {
      dispatch(cartActions.removeCardToCart({ cardId: item.id }));
    }
  };

  return (
    <CardWrapper>
      {props.delete && <DeleteIcon size={22} onClick={onDelete} />}
      <CardContent color={color}>
        <SelectedNumbers>{item.choosen_numbers}</SelectedNumbers>
        <InfoCard>
          <GameName color={color}>{item.type.type}</GameName>
          <Price>R${convertToReal()}</Price>
        </InfoCard>
      </CardContent>
    </CardWrapper>
  );
};

export default GameCard;
