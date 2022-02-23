import React, { useEffect, useState } from "react";
import { Content, LeftContent, PageTitle } from "./styles";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";

const DUMMY_GAMES = [
  {
    id: "1",
    type: "Timemania",
    description:
      "Escolha 10 números para apostar na Timemania. Você ganha acertando 7, 6, 5, 4 ou 3 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
    range: 80,
    price: 2,
    "max-number": 10,
    color: "#56464a",
  },
  {
    id: "2",
    type: "Lotofácil",
    description:
      "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
    range: 25,
    price: 2.5,
    "max-number": 15,
    color: "#7F3992",
  },
  {
    id: "3",
    type: "Mega-Sena",
    description:
      "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
    range: 60,
    price: 4.5,
    "max-number": 6,
    color: "#01AC66",
  },
  {
    id: "4",
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
        </LeftContent>
      </Content>
    </Layout>
  );
};

export default Games;
