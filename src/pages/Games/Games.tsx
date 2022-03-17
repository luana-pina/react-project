import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { games } from "@services/";
import { IRootState } from "@interfaces/";
import { gamesActions, cardGameActions } from "@store/";
import { toast } from "react-toastify";
import {
  ActionButtons,
  Cart,
  GamesButtons,
  GameTable,
  Layout,
} from "@components/";
import {
  Content,
  Description,
  DescriptionTitle,
  LeftContent,
  PageTitle,
  RightContent,
  Subtitle,
} from "./styles";

const Games: React.FC = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: IRootState) => state.games.gameSelected);
  const history = useNavigate();
  const isLogin = localStorage.getItem("bearer");
  const navigate = useNavigate();
  const params = useParams();
  const { gameId } = params;
  const { getGamesTypes } = games();
  const selectedNumbers: number[] = useSelector(
    (state: IRootState) => state.cardGame.card.choosen_numbers
  );

  function changeSelect(buttonId: string) {
    if (params.gameId !== buttonId) {
      history(`/games/${buttonId}`);
    }
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
