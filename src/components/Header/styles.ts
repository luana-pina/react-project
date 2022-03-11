import styled from "styled-components/macro";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0.8%;
  height: 10rem;
  max-height: 75px;
  box-shadow: 0px 0px 3px 2px #ebebeb;
  align-items: center;
  @media (min-width: 2280px) {
    max-width: 1800px;
    padding: 0 calc((100% - 1800px) / 2);
  }
  @media (min-width: 1900px) {
    max-width: 1800px;
    padding: 0 calc((100% - width) / 2);
    padding-top: 1rem;
  }
  @media (max-width: 1160px) {
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    height: 9vh;
  }
  @media (max-width: 680px) {
    align-items: center;
    height: 8vh;
  }
  @media (max-width: 490px) {
    width: 100%;
    padding: 1vh 0 0 0;
    height: 7vh;
    justify-content: space-evenly;
  }
`;
export const Line = styled.div`
  position: absolute;
  top: 5rem;
  left: 9.3vw;
  background-color: #b5c401;
  width: 7vw;
  height: 7px;
  border-radius: 6px;
  max-width: 110px;

  @media (min-width: 2280px) {
    top: 85px;
    left: calc((100vw - 1800px) / 2);
  }
  @media (max-width: 1800px) {
    width: 8vw;
    left: 9.5vw;
  }
  @media (max-width: 1160px) {
    width: 9vw;
    left: 5vw;
    top: 9.3vh;
  }

  @media (max-width: 1024px) {
    top: 5.8vh;
    left: 4vw;
    width: 13vw;
  }
  @media (max-width: 800px) {
    top: 6vh;
  }
  @media (max-width: 680px) {
    top: 8vh;
    width: 14vw;
  }
  @media (max-width: 600px) {
    left: 4vw;
    width: 17vw;
  }
  @media (max-width: 490px) {
    top: 7.5vh;
    left: 4vw;
    width: 22vw;
    max-width: 90px;
  }
  @media (max-width: 330px) {
    width: 26vw;
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
  @media (max-width: 1270px) {
    width: 20vw;
  }
  @media (max-width: 1060px) {
    width: 25vw;
  }
  @media (max-width: 900px) {
    width: 35%;
  }
  @media (max-width: 375px) {
    width: 40%;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 17vw;
  justify-content: space-around;
  @media (max-width: 1440px) {
    width: 20vw;
  }
  @media (max-width: 1060px) {
    width: 25vw;
  }
  @media (max-width: 900px) {
    width: 35%;
  }
  @media (max-width: 650px) {
    width: 50%;
  }
  @media (max-width: 375px) {
    width: 50%;
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
  font-size: 23px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 1420px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
`;
