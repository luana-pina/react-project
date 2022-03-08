import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
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
  :hover {
    color: #ffffff;
    background-color: ${(props) => props.color};
  }
`;
