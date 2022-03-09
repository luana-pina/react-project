import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  @media (max-width: 1024px) {
    align-items: right;
  }
  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const GameButton = styled.button`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  width: ${(props) => (props.width ? props.width : "7vw")};
  height: ${(props) => (props.height ? props.height : "4vh")};
  border-radius: 80px;
  background-color: ${(props) => (props.active ? props.color : "#ffffff")};
  border: 2px solid ${(props) => props.color};
  color: ${(props) => (props.active ? "#ffffff" : props.color)};
  margin-right: 20px;
  cursor: pointer;
  @media (min-width: 800px) {
    :hover {
      color: #ffffff;
      background-color: ${(props) => props.color};
    }
    max-width: 120px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    margin-right: 15px;
    width: 5.7rem;
  }
  @media (max-width: 670px) {
    margin-right: 1vw;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    width: 5rem;
    margin-right: 1vw;
  }
`;
