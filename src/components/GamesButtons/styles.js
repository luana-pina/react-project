import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export const GameButton = styled(NavLink)`
  font-size: 14px;
  font-style: italic;
  text-align: center;
  line-height: 2.5vw;
  text-decoration: none;
  font-weight: 600;
  width: 8vw;
  height: 2.5vw;
  border-radius: 80px;
  background-color: #ffffff;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: ${(props) => props.color};
  }
  &.active {
    color: #ffffff;
    background-color: ${(props) => props.color};
  }
`;
