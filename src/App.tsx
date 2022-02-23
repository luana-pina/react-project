import React from "react";
import { Route, Routes } from "react-router-dom";
import Games from "./pages/Games/Games";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/games" element={<Games />} />
        <Route path="/forgot" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
