import styled from "styled-components/macro";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0.8%;
  height: 5vw;
  box-shadow: 0px 0px 3px 2px #ebebeb;
`;
export const Line = styled.div`
  position: absolute;
  top: 5.5vw;
  left: 9.3vw;
  background-color: #b5c401;
  width: 8.2vw;
  height: 7px;
  border-radius: 6px;
`;

export const LeftContent = styled.div`
  display: flex;
  text-align: end;
  align-items: center;
  flex-direction: row;
  width: 16.3vw;
  padding-left: 0.2vw;
  justify-content: space-between;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 17vw;
  justify-content: space-between;
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-style: italic;
  font-size: 44px;
  letter-spacing: 0px;
  color: #707070;
  margin: 0px 0px 0px 0px;
`;

export const NavIcon = styled.h4`
  font-weight: 700;
  font-style: oblique;
  color: #707070;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
`;
