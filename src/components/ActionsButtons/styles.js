import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-column-gap: 3%;
  grid-template-areas: "complete clear cart";
  justify-items: start;
  align-items: center;
  padding-top: 3vw;
  @media (max-width: 415px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "complete clear"
      "cart cart";
    row-gap: 10%;
  }
`;

export const CompleteGame = styled.button`
  grid-area: complete;
  width: 10vw;
  height: 7vh;
  border-radius: 10px;
  border: 1px solid #27c383;
  color: #27c383;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  @media (max-width: 1324px) {
    width: 10rem;
    height: 4rem;
  }
  @media (max-width: 1024px) {
    width: 10rem;
  }
  @media (max-width: 670px) {
    width: 7rem;
    margin-right: 1vw;
  }
  @media (max-width: 415px) {
    width: 100%;
  }
`;
export const ClearGame = styled.button`
  grid-area: clear;
  width: 10vw;
  height: 7vh;
  border-radius: 10px;
  border: 1px solid #27c383;
  color: #27c383;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  @media (max-width: 1324px) {
    width: 10rem;
    height: 4rem;
  }
  @media (max-width: 1024px) {
    width: 10rem;
  }
  @media (max-width: 670px) {
    width: 7rem;
    margin-right: 1vw;
  }
  @media (max-width: 415px) {
    width: 100%;
  }
`;

export const AddCart = styled.button`
  grid-area: cart;
  justify-self: end;
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
  @media (max-width: 1324px) {
    width: 12rem;
    height: 4rem;
  }
  @media (max-width: 1024px) {
    width: 12rem;
  }
  @media (max-width: 670px) {
    width: 10rem;
  }
  @media (max-width: 415px) {
    width: 100%;
  }
`;
export const CartIcon = styled(AiOutlineShoppingCart)`
  color: #ffffff;
`;
