import React from "react";
import { useNavigate } from "react-router-dom";
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

  function logoutHandler() {
    localStorage.removeItem("bearer");
    navigate("/login");
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
        <NavIcon>Account</NavIcon>
        <Logout onClick={logoutHandler}>
          <NavIcon>Log out</NavIcon>
          <RightArrow size={23} />
        </Logout>
      </RightContent>
    </Wrapper>
  );
};

export default Header;
