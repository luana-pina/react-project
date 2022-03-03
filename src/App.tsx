import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Games from "./pages/Games/Games";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { gamesActions } from "./store/games-slice";
import { games } from "./shared/services";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
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
