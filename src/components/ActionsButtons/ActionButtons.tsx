import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICardGameCart, IRootState } from "../../shared/interfaces";
import { cartActions } from "../../store/cart-slice";
import { cardGameActions } from "../../store/game-card-slice";
import { popupActions } from "../../store/popup-slice";
import { ActionsGame, AddCart, CartIcon, Content } from "./styles";

const ActionButtons: React.FC<{ completeGameHandler: Function }> = (props) => {
  const dispatch = useDispatch();
  const card = useSelector((state: IRootState) => state.cardGame.card);
  const game = useSelector((state: IRootState) => state.games.gameSelected);
  const selectedNumbersArray = card.choosen_numbers.split(",");

  function addToCartHandler(card: ICardGameCart) {
    const isVoid = selectedNumbersArray[0] === "";
    const isSingular = game.max_number - selectedNumbersArray.length === 1;
    if (selectedNumbersArray.length < game.max_number) {
      dispatch(
        popupActions.showPopup({
          message: `Selecione mais ${
            isVoid
              ? game.max_number
              : game.max_number - selectedNumbersArray.length
          } número${isSingular ? "" : "s"}`,
          type: "error",
        })
      );
      setTimeout(() => dispatch(popupActions.hidePopup()), 3000);
    } else {
      dispatch(cartActions.addCardToCart(card));
    }
  }

  return (
    <Content>
      <div>
        <ActionsGame onClick={props.completeGameHandler}>
          Complete Game
        </ActionsGame>
        <ActionsGame
          onClick={() => {
            dispatch(cardGameActions.clearCard());
          }}
        >
          Clear Game
        </ActionsGame>
      </div>
      <AddCart onClick={() => addToCartHandler(card)}>
        <CartIcon size={25} />
        Add to Cart
      </AddCart>
    </Content>
  );
};

export default ActionButtons;
