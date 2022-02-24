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

type Game = {
  id: string;
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
};
const DUMMY_GAMES: Game[] = [
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

const Games: React.FC = () => {
  const listItems = [
    {
      id: "g1",
      game: "Lotofácil",
      color: "#7F3992",
      price: 2.5,
      selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
  ];
  const params = useParams();
  const { gameId } = params;
  const history = useNavigate();
  const [game, setGame] = useState({
    id: "",
    type: "",
    description: "",
    range: 0,
    "max-number": 0,
    color: "",
  });

  useEffect(() => {
    let notFound: boolean = true;
    function getGame(gameId: string | undefined) {
      DUMMY_GAMES.forEach((item) => {
        if (item.id === gameId) {
          setGame(item);
          notFound = false;
        }
      });
    }
    getGame(gameId);
    if (notFound) {
      history("/notfound");
    }
  }, [gameId, game, history]);

  return (
    <Layout>
      <Content>
        <LeftContent>
          <PageTitle>
            <span>New bet</span> for {game.type}
          </PageTitle>
          <Subtitle>Choose a game</Subtitle>
          <GamesButtons gamesList={DUMMY_GAMES} to={`/games`} />
          <div>
            <DescriptionTitle>Fill your bet</DescriptionTitle>
            <Description>{game.description}</Description>
          </div>
          <GameTable range={game.range} color={game.color} />
          <ActionButtons />
        </LeftContent>
        <RightContent>
          <Cart listItems={listItems} totalCart={2.5} />
        </RightContent>
      </Content>
    </Layout>
  );
};

export default Games;
