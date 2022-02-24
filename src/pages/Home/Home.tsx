import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";
import GamesButtons from "../../components/GamesButtons/GamesButtons";
import Layout from "../../components/Layout/Layout";
import { LeftArrow } from "../../components/UI/LeftArrow/LeftArrow";
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
const DUMMY_GAMES = [
  {
    id: "timemania",
    type: "Timemania",
    description:
      "Escolha 10 números para apostar na Timemania. Você ganha acertando 7, 6, 5, 4 ou 3 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
    range: 80,
    price: 2,
    "max-number": 10,
    color: "#56464a",
  },
  {
    id: "lotofacil",
    type: "Lotofácil",
    description:
      "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
    range: 25,
    price: 2.5,
    "max-number": 15,
    color: "#7F3992",
  },
  {
    id: "megasena",
    type: "Mega-Sena",
    description:
      "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
    range: 60,
    price: 4.5,
    "max-number": 6,
    color: "#01AC66",
  },
  {
    id: "quina",
    type: "Quina",
    description:
      "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
    range: 80,
    price: 2,
    "max-number": 5,
    color: "#F79C31",
  },
];

const listItems = [
  {
    id: "g1",
    gameId: "quina",
    gameName: "Quina",
    color: "#F79C31",
    price: 2,
    selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: "g2",
    gameId: "lotofacil",
    gameName: "Lotofácil",
    color: "#7F3992",
    price: 2.5,
    selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: "g3",
    gameId: "megasena",
    gameName: "Mega-Sena",
    color: "#01AC66",
    price: 4.5,
    selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: "g4",
    gameId: "timemania",
    gameName: "Timemania",
    color: "#56464a",
    price: 2,
    selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
];
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
    console.log(gameId);
  }, [gameId]);

  return (
    <Layout isHome={true}>
      <TopContent>
        <LeftContent>
          <PageTitle>Recent Games</PageTitle>
          <Filters>
            <Label>Filters</Label>
            <GamesButtons
              to={"/home"}
              gamesList={DUMMY_GAMES}
              width="6rem"
              height="1.5rem"
            />
          </Filters>
        </LeftContent>
        <NewBet to={`/games/${DUMMY_GAMES[0].id}`}>
          New Bet <LeftArrow color="#B5C401" />
        </NewBet>
      </TopContent>
      <Routes>
        <Route
          path=":gameId"
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
