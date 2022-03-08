import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";

const Games: React.FC = () => {
  const params = useParams();
  const { gameId } = params;
  const history = useNavigate();
  const game = useSelector((state: IRootState) => state.games.gameSelected);
  const dispatch = useDispatch();
  const selectedNumbers: number[] = useSelector(
    (state: IRootState) => state.cardGame.card.choosen_numbers
  );
  const isLogin = localStorage.getItem("bearer");
  const { getGamesTypes } = games();
  const navigate = useNavigate();

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
      toast.error("Failed Request!", {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    }
  }
  useEffect(() => {
    if (!isLogin) {
      toast.error("Log in to access this page!", {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
      navigate("/login");
      return;
    }
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
        dispatch(cardGameActions.addNumber({ newNumber: buttonId }));
      } else {
        toast.error("Can't select more numbers!", {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        });
      }
    } else {
      dispatch(cardGameActions.removeNumber({ number: buttonId }));
    }
    dispatch(
      cardGameActions.addCardInfo({
        id: Math.floor(Math.random() * (99 - 1 + 1) + 1),
        price: game.price,
        type: { type: game.type, id: game.id },
      })
    );
  }

  function completeGameHandler() {
    let maxNumber = game.range;
    let times = game.max_number;
    const numbersArray = [...selectedNumbers];
    let numb: number;
    let cont = 0;
    if (selectedNumbers.length !== 0) {
      cont = selectedNumbers.length;
    }
    while (cont < times) {
      numb = Math.floor(Math.random() * maxNumber + 1);
      if (!numbersArray.some((item) => item === numb)) {
        selectHandler(numb);
        numbersArray.push(numb);
        cont++;
      }
    }
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
