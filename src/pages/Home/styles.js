import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const TopContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const Filters = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
`;
export const RecentGames = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: stretch;
`;
export const LeftContent = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.p`
  width: fit-content;
  font-size: 23px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
`;
export const Label = styled.p`
  width: fit-content;
  font-size: 15px;
  font-style: italic;
  font-weight: 100;
  color: #868686;
  letter-spacing: 0px;
  margin-right: 2%;
`;
export const NewBet = styled(Link)`
  width: fit-content;
  font-size: 23px;
  font-style: italic;
  font-weight: bold;
  color: #b5c401;
  letter-spacing: 0px;
  text-decoration: none;
`;
