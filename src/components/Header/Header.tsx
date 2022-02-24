import React from "react";
import { useNavigate } from "react-router-dom";
import { LeftArrow } from "../UI/LeftArrow/LeftArrow";
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
  return (
    <Wrapper>
      <LeftContent>
        <Logo>TGL</Logo>
        {props.isHome ? (
          <></>
        ) : (
          <NavIcon onClick={() => navigate("/")}>Home</NavIcon>
        )}
      </LeftContent>
      <Line />
      <RightContent>
        <NavIcon>Account</NavIcon>
        <Logout onClick={() => navigate("/login")}>
          <NavIcon>Log out</NavIcon>
          <LeftArrow size={23} />
        </Logout>
      </RightContent>
    </Wrapper>
  );
};

export default Header;
