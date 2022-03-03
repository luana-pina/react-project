import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";
import GamesButtons from "../../components/GamesButtons/GamesButtons";
import Layout from "../../components/Layout/Layout";
import { RightArrow } from "../../components/UI/Arrows/Arrows";
import { ICardGame, IRootState } from "../../shared/interfaces";
import { games } from "../../shared/services";
import { gamesActions } from "../../store/games-slice";
import {
  Filters,
  Label,
  LeftContent,
  NewBet,
  PageTitle,
  RecentGames,
  TopContent,
} from "./styles";

type GamesArray = Array<{
  id: string;
  gameId: string;
  gameName: string;
  color: string;
  price: number;
  selectedNumbers: number[];
}>;

function Home() {
  const [filtered, setFiltered] = useState<ICardGame[]>();
  const params = useParams();
  const gameId: string | undefined = params["*"];
  const navigate = useNavigate();
  const { getRecentGames } = games();
  const dispatch = useDispatch();
  const gamesList = useSelector((state: IRootState) => state.games.gamesType);
  const recentGames = useSelector(
    (state: IRootState) => state.games.recentGames
  );

  const { getGamesTypes } = games();

  useEffect(() => {
    async function getGamesList() {
      try {
        const resGamesRequest = await getGamesTypes();
        dispatch(
          gamesActions.getSelectedGame({
            requestData: resGamesRequest.data.types,
          })
        );
      } catch (error) {
        console.log("error:", error);
      }
    }
    getGamesList();
    async function getRecentGamesList() {
      try {
        const resGamesRequest = await getRecentGames();
        console.log(resGamesRequest);
        dispatch(gamesActions.getRecentGames(resGamesRequest.data));
      } catch (error) {
        console.log("error:", error);
      }
    }
    getRecentGamesList();
  }, [dispatch, getRecentGames, getGamesTypes]);

  useEffect(() => {
    function gamesFilter(gamesList: ICardGame[]) {
      const filter = gamesList.filter((item) =>
        gameId?.match(`${item.game_id}`)
      );
      filter.sort((a, b) => {
        if (a.type.type > b.type.type) return 1;
        if (a.type.type < b.type.type) return -1;
        return 0;
      });
      setFiltered(filter);
    }

    gamesFilter(recentGames);
  }, [gameId, recentGames]);

  function changeSelect(buttonId: string) {
    if (gameId?.match(buttonId)) {
      let newParams = gameId.replace(`+${buttonId}`, "");
      navigate(`/home/${newParams}`);
    } else {
      let newParams = gameId?.concat(`+${buttonId}`);
      navigate(`/home/${newParams}`);
    }
  }

  return (
    <Layout isHome={true}>
      <TopContent>
        <LeftContent>
          <PageTitle>Recent Games</PageTitle>
          <Filters>
            <Label>Filters</Label>
            <GamesButtons width="6rem" height="1.5rem" to={changeSelect} />
          </Filters>
        </LeftContent>
        <NewBet to={`/games/${gamesList[0].id}`}>
          New Bet <RightArrow color="#B5C401" />
        </NewBet>
      </TopContent>
      <Routes>
        <Route
          path="/:gameId"
          element={
            <RecentGames>
              {filtered ? (
                filtered.map((item) => {
                  return <GameCard key={item.id} item={item} />;
                })
              ) : (
                <p>Not found games!</p>
              )}
            </RecentGames>
          }
        />
        <Route
          path="/"
          element={
            <RecentGames>
              {recentGames.length > 0 &&
                recentGames.map((item) => {
                  return <GameCard key={item.id} item={item} />;
                })}
            </RecentGames>
          }
        />
      </Routes>
    </Layout>
  );
}

export default Home;
