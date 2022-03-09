import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const TopContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 670px) {
    margin-top: 2rem;
  }
`;
export const Filters = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  @media (max-width: 670px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const RecentGames = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 768px) {
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
  @media (max-width: 1024px) {
    width: 83%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    width: fit-content;
  }
`;

export const PageTitle = styled.p`
  width: max-content;
  font-size: 28px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
  @media (max-width: 1024px) {
    font-size: 23px;
  }
  @media (max-width: 768px) {
    margin: 2rem 0 0 0;
  }
  @media (max-width: 670px) {
    margin: 0;
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
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    margin: 1rem 0 0.5rem 0.5rem;
  }
`;

export const NewBet = styled(Link)`
  display: flex;
  width: fit-content;
  font-size: 28px;
  font-style: italic;
  font-weight: bold;
  color: #b5c401;
  letter-spacing: 0px;
  text-decoration: none;
  justify-content: center;
  @media (max-width: 1024px) {
    font-size: 23px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
