import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3vw;
`;

export const ActionsGame = styled.button`
  width: 10vw;
  height: 7vh;
  border-radius: 10px;
  border: 1px solid #27c383;
  color: #27c383;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  margin-right: 2vw;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;

export const AddCart = styled.button`
  display: flex;
  padding-left: 1vw;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 12vw;
  height: 7vh;
  border-radius: 10px;
  border: 1px solid #27c383;
  background-color: #27c383;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  line-height: 5vw;
  font-weight: 600;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;
export const CartIcon = styled(AiOutlineShoppingCart)`
  color: #ffffff;
`;
