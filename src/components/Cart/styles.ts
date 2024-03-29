import styled from "styled-components";

export const CartTitle = styled.h3`
  font-size: 23px;
  font-style: italic;
  font-weight: 600;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
  margin-left: 8px;
  @media (min-width: 1900px) {
    font-size: 28px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: end;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const CartTotal = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 23px;
  font-style: italic;
  font-weight: 100;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
  margin-top: 3vw;
  margin-left: 8px;
  @media (min-width: 1900px) {
    font-size: 28px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;
export const TextButton = styled.p`
  display: flex;
  align-items: center;
  color: #27c383;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    margin: 0;
  }
`;

export const CartItems = styled.div`
  max-height: 60%;
  width: 100%;
  text-align: center;
  color: #868686;
  font-weight: bold;
  font-size: 18px;
  overflow: auto;
  scrollbar-width: 5px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 4px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb {
    background: #e2e2e2;
  }
  @media (max-width: 768px) {
    max-height: 250px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
