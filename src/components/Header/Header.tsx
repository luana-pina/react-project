import React from "react";
import {
  LeftContent,
  Line,
  Logo,
  Logout,
  LogoutArrow,
  Navigate,
  RightContent,
  Wrapper,
} from "./styles";

const Header: React.FC<{ isHome: boolean | undefined }> = (props) => {
  return (
    <Wrapper>
      <LeftContent>
        <Logo>TGL</Logo>
        {props.isHome ? <></> : <Navigate>Home</Navigate>}
      </LeftContent>
      <Line />
      <RightContent>
        <Navigate>Account</Navigate>
        <Logout>
          <Navigate>Log out</Navigate>
          <LogoutArrow size={23} />
        </Logout>
      </RightContent>
    </Wrapper>
  );
};

export default Header;
