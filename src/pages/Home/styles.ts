import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: "title filters newbet";
  width: 100%;

  @media (max-width: 800px) {
    justify-items: start;
    align-items: baseline;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title newbet"
      "filters filters";
    margin-top: 10vw;
  }
`;
export const Filters = styled.div`
  grid-area: filters;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 3rem;
  justify-self: center;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0px;
    width: 100%;
  }
`;
export const RecentGames = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 955px) {
    padding-top: 2rem;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  max-width: 850px;
  width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1435px) {
    width: 75%;
  }
  @media (max-width: 1231px) {
    width: 80%;
  }
  @media (max-width: 1180px) {
    width: 77%;
  }
  @media (max-width: 1060px) {
    width: 80%;
  }
  @media (max-width: 955px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: fit-content;
  }
`;

export const PageTitle = styled.p`
  grid-area: title;
  width: max-content;
  font-size: 28px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
  @media (max-width: 1180px) {
    font-size: 23px;
  }
  @media (max-width: 800px) {
    margin: 0;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;
export const Label = styled.p`
  width: fit-content;
  font-size: 19px;
  font-style: italic;
  font-weight: 100;
  color: #868686;
  letter-spacing: 0px;
  margin-right: 2%;
  @media (max-width: 1060px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export const NewBet = styled(Link)`
  grid-area: newbet;
  justify-self: end;
  display: flex;
  width: fit-content;
  font-size: 28px;
  font-style: italic;
  font-weight: bold;
  color: #b5c401;
  letter-spacing: 0px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 1030px) {
    font-size: 23px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
