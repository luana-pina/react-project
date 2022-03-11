import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICardGame, IRootState } from "../../shared/interfaces";
import {
  ICardGameAccount,
  ICardGameCart,
} from "../../shared/interfaces/GamesInterfaces";
import { cartActions } from "../../store/cart-slice";
import Modal from "../UI/Modal/Modal";
import {
  ButtonsArea,
  CardContent,
  CardWrapper,
  DeleteIcon,
  GameName,
  InfoCard,
  ModalButton,
  ModalText,
  ModalTitle,
  Price,
  SelectedNumbers,
} from "./styles";
import { convertToReal } from "../../shared/utils/convertToReal";

const GameCard: React.FC<{
  item: ICardGame | ICardGameCart | ICardGameAccount;
  delete?: boolean | undefined;
}> = (props) => {
  const { item } = props;
  const gamesList = useSelector((state: IRootState) => state.games.gamesType);
  const [color, setColor] = useState<string>("#868686");
  const [gameName, setGameName] = useState<{}>("#868686");
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const orderlyArray = [...item.choosen_numbers];

  useEffect(() => {
    function getCardColor() {
      gamesList.forEach((game) => {
        if (game.id === item.type.id) {
          setColor(game.color);
          setGameName(game.type);
        }
      });
    }
    getCardColor();
  }, [gamesList, item]);

  const onDelete = () => {
    if (props.delete) {
      dispatch(cartActions.removeCardToCart({ cardId: item.id }));
    }
  };
  const onCancel = () => {
    setShowModal(false);
  };
  const showModalHandler = () => {
    if (props.delete) {
      setShowModal(true);
    }
  };

  return (
    <Fragment>
      {showModal && (
        <Modal onClose={onCancel}>
          <ModalTitle>Are you sure?</ModalTitle>
          <ModalText>
            Once you delete a game, there is no going back. Please be certain.
          </ModalText>
          <ButtonsArea>
            <ModalButton color="#bb0a1e" onClick={onDelete}>
              Delete
            </ModalButton>
            <ModalButton color="#adc0c4" onClick={onCancel}>
              Cancel
            </ModalButton>
          </ButtonsArea>
        </Modal>
      )}
      <CardWrapper>
        {props.delete && <DeleteIcon size={22} onClick={showModalHandler} />}
        <CardContent color={color}>
          <SelectedNumbers>
            {orderlyArray.sort((a, b) => a - b).join(", ")}
          </SelectedNumbers>
          <InfoCard>
            <GameName color={color}>{gameName}</GameName>
            <Price>R${convertToReal(item.price)}</Price>
          </InfoCard>
        </CardContent>
      </CardWrapper>
    </Fragment>
  );
};

export default GameCard;
