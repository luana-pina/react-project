import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cartActions, gamesActions, loginActions } from "@store/";
import { RightArrow } from "@components/";
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

  function logoutHandler() {
    localStorage.removeItem("bearer");
    dispatch(gamesActions.clearData());
    dispatch(cartActions.clearCart());
    dispatch(loginActions.isLoginHandler());
    toast.success("User log out successfully", {
      position: toast.POSITION.TOP_CENTER,
      draggable: false,
    });
    navigate("/login");
  }
  function AccountHandler() {
    const userId = localStorage.getItem("bearer");
    navigate(`/account/${userId}`);
  }

  return (
    <Wrapper>
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
        <NavIcon onClick={AccountHandler}>Account</NavIcon>
        <Logout onClick={logoutHandler}>
          <NavIcon>Log out</NavIcon>
          <RightArrow size={30} />
        </Logout>
      </RightContent>
    </Wrapper>
  );
};

export default Header;
