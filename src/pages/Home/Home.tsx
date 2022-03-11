import { games } from "../../shared/services";
import { gamesActions } from "../../store/games-slice";
import { ICardGame, IRootState } from "../../shared/interfaces";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  GameCard,
  GamesButtons,
  Layout,
  Loading,
  NotFoundGames,
  RightArrow,
} from "../../components";
import {
  Filters,
  Label,
  NewBet,
  PageTitle,
  RecentGames,
  TopContent,
} from "./styles";

function Home() {
  const [filtered, setFiltered] = useState<ICardGame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { getRecentGames } = games();
  const dispatch = useDispatch();
  const params = useParams();
  const gameId: string | undefined = params["*"];
  const gamesList = useSelector((state: IRootState) => state.games.gamesType);
  const isLogin = localStorage.getItem("bearer");
  const navigate = useNavigate();
  const recentGames = useSelector(
    (state: IRootState) => state.games.recentGames
  );

  function changeSelect(buttonId: string) {
    if (gameId?.match(buttonId)) {
      let newParams = gameId.replace(`+${buttonId}`, "");
      navigate(`/home/${newParams}`);
    } else {
      let newParams = gameId?.concat(`+${buttonId}`);
      navigate(`/home/${newParams}`);
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
    async function getRecentGamesList() {
      await getRecentGames()
        .then((res) => {
          dispatch(gamesActions.getRecentGames({ requestData: res.data }));
        })
        .catch((error) => {
          toast.error("Request to failed!", {
            position: toast.POSITION.TOP_CENTER,
            draggable: false,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getRecentGamesList();
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLogin]);

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
      filter.length > 0 || gameId
        ? setFiltered(filter)
        : setFiltered(gamesList);
    }

    gamesFilter(recentGames);
  }, [gameId, recentGames]);

  return (
    <Layout isHome={true}>
      <TopContent>
        <PageTitle>Recent Games</PageTitle>
        <Filters>
          <Label>Filters</Label>
          <GamesButtons width="6.5rem" height="1.9rem" to={changeSelect} />
        </Filters>
        {gamesList.length > 0 && (
          <NewBet to={`/games/${gamesList[0].id}`}>
            New Bet <RightArrow color="#B5C401" size={30} />
          </NewBet>
        )}
      </TopContent>
      {loading && <Loading />}
      {!loading && (
        <RecentGames>
          {filtered.length > 0 ? (
            filtered.map((item) => {
              return <GameCard key={item.id} item={item} />;
            })
          ) : (
            <NotFoundGames />
          )}
        </RecentGames>
      )}
    </Layout>
  );
}

export default Home;
