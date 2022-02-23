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

function Header() {
  return (
    <Wrapper>
      <LeftContent>
        <Logo>TGL</Logo>
        <Navigate>Home</Navigate>
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
}

export default Header;
