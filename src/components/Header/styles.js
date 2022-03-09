import styled from "styled-components/macro";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0.8%;
  height: 10vh;
  max-height: 75px;
  box-shadow: 0px 0px 3px 2px #ebebeb;
  @media (max-width: 1024px) {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    height: 9vh;
  }
  @media (max-width: 500px) {
    align-items: center;
    width: 94%;
    height: 8vh;
    padding-left: 3%;
    padding-right: 3%;
  }
`;
export const Line = styled.div`
  position: absolute;
  top: 9.3vh;
  left: 9.3vw;
  background-color: #b5c401;
  width: 7vw;
  height: 7px;
  border-radius: 6px;
  @media (max-width: 1024px) {
    width: 9vw;
    left: 5vw;
  }
  @media (max-width: 768px) {
    width: 13vw;
  }
  @media (max-width: 500px) {
    top: 8vh;
    left: 2vw;
    width: 20vw;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  text-align: end;
  align-items: center;
  flex-direction: row;
  width: 16.3vw;
  padding-left: 0.2vw;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 25vw;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 17vw;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 25vw;
  }
  @media (max-width: 768px) {
    width: 35%;
  }
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
  @media (max-width: 500px) {
    font-size: 38px;
  }
`;

export const NavIcon = styled.h4`
  font-weight: 700;
  font-style: oblique;
  color: #707070;
  font-size: 25px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
