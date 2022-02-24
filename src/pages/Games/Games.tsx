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
import { DUMMY_GAMES, listItems } from "../data";

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
            <span>New bet</span> for {game.type}
          </PageTitle>
          <Subtitle>Choose a game</Subtitle>
          <GamesButtons gamesList={DUMMY_GAMES} to={changeSelect} />
          <div>
            <DescriptionTitle>Fill your bet</DescriptionTitle>
            <Description>{game.description}</Description>
          </div>
          <GameTable range={game.range} color={game.color} />
          <ActionButtons />
        </LeftContent>
        <RightContent>
          <Cart listItems={listItems} />
        </RightContent>
      </Content>
    </Layout>
  );
};

export default Games;
