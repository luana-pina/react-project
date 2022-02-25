import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";
import GamesButtons from "../../components/GamesButtons/GamesButtons";
import Layout from "../../components/Layout/Layout";
import { RightArrow } from "../../components/UI/Arrows/Arrows";
import { DUMMY_GAMES, listItems } from "../data";
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
  const [filtered, setFiltered] = useState<GamesArray | undefined>();
  const params = useParams();
  const gameId: string | undefined = params["*"];
  const navigate = useNavigate();

  useEffect(() => {
    function gamesFilter(gamesList: GamesArray) {
      console.log();
      const filter = gamesList.filter((item) => gameId?.match(item.gameId));
      filter.sort((a, b) => {
        if (a.gameName > b.gameName) return 1;
        if (a.gameName < b.gameName) return -1;
        return 0;
      });
      setFiltered(filter);
    }
    gamesFilter(listItems);
  }, [gameId]);

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
            <GamesButtons
              gamesList={DUMMY_GAMES}
              width="6rem"
              height="1.5rem"
              to={changeSelect}
            />
          </Filters>
        </LeftContent>
        <NewBet to={`/games/${DUMMY_GAMES[0].id}`}>
          New Bet <RightArrow color="#B5C401" />
        </NewBet>
      </TopContent>
      <Routes>
        <Route
          path="/:gameId"
          element={
            <RecentGames>
              {filtered ? (
                filtered.sort().map((item) => {
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
              {listItems.map((item) => {
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
