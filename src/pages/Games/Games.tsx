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

const Games: React.FC = () => {
  const params = useParams();
  const { gameId } = params;
  const history = useNavigate();
  const game = useSelector((state: IRootState) => state.games.gameSelected);
  const listItems = useSelector((state: IRootState) => state.games.recentGames);
  const dispatch = useDispatch();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  function changeSelect(buttonId: string) {
    if (params.gameId !== buttonId) {
      history(`/games/${buttonId}`);
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
          <GameTable range={game.range} color={game.color} />
          <ActionButtons range={game.range} />
        </LeftContent>
        <RightContent>
          <Cart listItems={listItems} />
        </RightContent>
      </Content>
    </Layout>
  );
};

export default Games;
