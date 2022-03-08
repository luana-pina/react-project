import React, { Fragment, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Games from "./pages/Games/Games";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { gamesActions } from "./store/games-slice";
import { games } from "./shared/services";
import { cartActions } from "./store/cart-slice";
import { toast } from "react-toastify";
import { IRootState } from "./shared/interfaces";

function App() {
  const dispatch = useDispatch();
  const { getGamesTypes } = games();
  const isLogged = useSelector((state: IRootState) => state.login.isLogin);

  useEffect(() => {
    async function getGamesList() {
      try {
        await getGamesTypes().then((res) => {
          dispatch(
            gamesActions.getSelectedGame({
              requestData: res.data.types,
            })
          );
          dispatch(
            cartActions.getMinCartValue({
              min_cart_value: res.data.min_cart_value,
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games/:gameId" element={<Games />} />
        <Route path="/forgot" element={<ResetPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
