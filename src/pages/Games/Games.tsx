import React, { useEffect } from "react";
import {
  Content,
  Description,
  DescriptionTitle,
  LeftContent,
  PageTitle,
  RightContent,
  Subtitle,
} from "./styles";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import GameTable from "../../components/GameTable/GameTable";
import GamesButtons from "../../components/GamesButtons/GamesButtons";
import ActionButtons from "../../components/ActionsButtons/ActionButtons";
import Cart from "../../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { games } from "../../shared/services";
import { IRootState } from "../../shared/interfaces";
import { gamesActions } from "../../store/games-slice";
import { cardGameActions } from "../../store/game-card-slice";
import { popupActions } from "../../store/popup-slice";

const Games: React.FC = () => {
  const params = useParams();
  const { gameId } = params;
  const history = useNavigate();
  const game = useSelector((state: IRootState) => state.games.gameSelected);
  const dispatch = useDispatch();
  const selectedNumbers: number[] = [];
  const { getGamesTypes } = games();

  async function getGamesList(gameId: number) {
    try {
      const resGamesRequest = await getGamesTypes();
      dispatch(
        gamesActions.getSelectedGame({
          requestData: resGamesRequest.data.types,
          gameId,
        })
      );
    } catch (error) {
      console.log("error:", error);
    }
  }
  useEffect(() => {
    getGamesList(Number(gameId));
    dispatch(cardGameActions.clearCard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  function changeSelect(buttonId: string) {
    if (params.gameId !== buttonId) {
      history(`/games/${buttonId}`);
    }
  }

  function selectHandler(buttonId: number) {
    if (!selectedNumbers.some((item) => item === buttonId)) {
      if (selectedNumbers.length < game.max_number) {
        selectedNumbers.push(buttonId);
      } else {
        dispatch(
          popupActions.showPopup({
            type: "error",
            message: "Limite de números atingido!",
          })
        );
        setTimeout(() => dispatch(popupActions.hidePopup()), 3000);
      }
    } else {
      selectedNumbers.forEach((item, index) => {
        if (item === buttonId) {
          selectedNumbers.splice(index, 1);
        }
      });
    }
    dispatch(
      cardGameActions.addCardInfo({
        id: Math.floor(Math.random() * (99 - 1 + 1) + 1),
        newNumbers: selectedNumbers,
        price: game.price,
        type: { type: game.type, id: game.id },
      })
    );
  }

  function completeGameHandler() {
    let maxNumber = game.range;
    let times = game.max_number;
    let numb: number;
    let cont = 0;
    selectedNumbers.pop();
    if (selectedNumbers.length !== 0) {
      cont = selectedNumbers.length;
    }
    while (cont <= times) {
      numb = Math.floor(Math.random() * maxNumber + 1);
      if (!selectedNumbers.some((item) => item === numb)) {
        selectedNumbers.push(numb);
        cont++;
      }
    }
    dispatch(
      cardGameActions.addCardInfo({
        id: Math.floor(Math.random() * (99 - 1 + 1) + 1),
        newNumbers: selectedNumbers,
        price: game.price,
        type: { type: game.type, id: game.id },
      })
    );
  }

  return (
    <Layout>
      <Content>
        <LeftContent>
          <PageTitle>
            <span>New bet</span> for {game?.type}
          </PageTitle>
          <Subtitle>Choose a game</Subtitle>
          <GamesButtons to={changeSelect} />
          <div>
            <DescriptionTitle>Fill your bet</DescriptionTitle>
            <Description>{game?.description}</Description>
          </div>
          <GameTable
            range={game.range}
            color={game.color}
            selectHandler={selectHandler}
          />
          <ActionButtons completeGameHandler={completeGameHandler} />
        </LeftContent>
        <RightContent>
          <Cart />
        </RightContent>
      </Content>
    </Layout>
  );
};

export default Games;
