import { cartActions, gamesActions } from "@store/";
import { games } from "@services/";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { IRootState } from "@interfaces/";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  Account,
  ChangePassword,
  Games,
  Home,
  Login,
  NotFound,
  Register,
  ResetPassword,
} from "./pages";

function App() {
  const { getGamesTypes } = games();
  const dispatch = useDispatch();
  const isLogged = useSelector((state: IRootState) => state.login.isLogin);

  useEffect(() => {
    async function getGamesList() {
      try {
        await getGamesTypes().then(({ data }) => {
          dispatch(
            gamesActions.getSelectedGame({
              requestData: data.types,
            })
          );
          dispatch(
            cartActions.getMinCartValue({
              min_cart_value: data.min_cart_value,
            })
          );
        });
      } catch (error) {
        toast.error("Failed to Request!", {
          position: toast.POSITION.TOP_CENTER,
          draggable: false,
        });
      }
    }
    getGamesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/account/:userToken" element={<Account />} />
        <Route path="/games/:gameId" element={<Games />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ResetPassword />} />
        <Route path="/forgot/:userToken" element={<ChangePassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
