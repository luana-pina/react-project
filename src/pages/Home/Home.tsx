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
  const gameId = params["*"];
  const navigate = useNavigate();

  useEffect(() => {
    function gamesFilter(gamesList: GamesArray) {
      const filter = gamesList.filter((item) => item.gameId === gameId);
      setFiltered(filter);
    }
    gamesFilter(listItems);
  }, [gameId]);

  function changeSelect(buttonId: string) {
    if (params["*"] === buttonId) {
      navigate("/home");
    } else {
      navigate(`/home/${buttonId}`);
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
                filtered.map((item) => {
                  return (
                    <GameCard
                      key={item.id}
                      color={item.color}
                      price={item.price}
                      game={item.gameName}
                      selectedNumbers={item.selectedNumbers}
                    />
                  );
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
                return (
                  <GameCard
                    key={item.id}
                    color={item.color}
                    price={item.price}
                    game={item.gameName}
                    selectedNumbers={item.selectedNumbers}
                  />
                );
              })}
            </RecentGames>
          }
        />
      </Routes>
    </Layout>
  );
}

export default Home;
