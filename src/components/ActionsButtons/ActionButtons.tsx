import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ICardGameCart, IRootState } from "../../shared/interfaces";
import { cartActions } from "../../store/cart-slice";
import { cardGameActions } from "../../store/game-card-slice";
import { AddCart, CartIcon, ClearGame, CompleteGame, Content } from "./styles";

const ActionButtons: React.FC<{
  completeGameHandler: Function;
}> = (props) => {
  const dispatch = useDispatch();
  const card = useSelector((state: IRootState) => state.cardGame.card);
  const game = useSelector((state: IRootState) => state.games.gameSelected);
  const selectedNumbersArray = card.choosen_numbers;

  function addToCartHandler(card: ICardGameCart) {
    const isSingular = game.max_number - selectedNumbersArray.length === 1;
    if (selectedNumbersArray.length < game.max_number) {
      toast.error(
        `Select ${game.max_number - selectedNumbersArray.length} number${
          isSingular ? "" : "s"
        } more!`,
        {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        }
      );
    } else {
      dispatch(cartActions.addCardToCart(card));
      dispatch(cardGameActions.clearCard());
    }
  }

  return (
    <Content>
      <CompleteGame onClick={() => props.completeGameHandler()}>
        Complete Game
      </CompleteGame>
      <ClearGame
        onClick={() => {
          dispatch(cardGameActions.clearCard());
        }}
      >
        Clear Game
      </ClearGame>
      <AddCart onClick={() => addToCartHandler(card)}>
        <CartIcon size={25} />
        Add to Cart
      </AddCart>
    </Content>
  );
};

export default ActionButtons;
