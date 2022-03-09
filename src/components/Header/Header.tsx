import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import { gamesActions } from "../../store/games-slice";
import { loginActions } from "../../store/login-slice";
import { RightArrow } from "../UI/Arrows/Arrows";
import {
  LeftContent,
  Line,
  Logo,
  Logout,
  NavIcon,
  RightContent,
  Wrapper,
} from "./styles";

const Header: React.FC<{ isHome: boolean | undefined }> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = window.screen.availWidth < 650;

  function logoutHandler() {
    localStorage.removeItem("bearer");
    dispatch(gamesActions.clearData());
    dispatch(cartActions.clearCart());
    dispatch(loginActions.isLoginHandler());
    navigate("/login");
  }

  return (
    <Wrapper>
      {!isMobile && (
        <>
          <LeftContent>
            <Logo>TGL</Logo>
            {props.isHome ? (
              <></>
            ) : (
              <NavIcon onClick={() => navigate("/home")}>Home</NavIcon>
            )}
          </LeftContent>
          <Line />
          <RightContent>
            <NavIcon>Account</NavIcon>
            <Logout onClick={logoutHandler}>
              <NavIcon>Log out</NavIcon>
              <RightArrow size={30} />
            </Logout>
          </RightContent>
        </>
      )}
      {isMobile && (
        <>
          <Logo>TGL</Logo>
          {props.isHome ? (
            <></>
          ) : (
            <NavIcon onClick={() => navigate("/home")}>Home</NavIcon>
          )}
          <Line />
          <NavIcon>Account</NavIcon>
          <Logout onClick={logoutHandler}>
            <NavIcon>Log out</NavIcon>
            <RightArrow size={30} />
          </Logout>
        </>
      )}
    </Wrapper>
  );
};

export default Header;
