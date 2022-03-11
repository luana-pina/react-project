import styled from "styled-components/macro";

interface buttonTable {
  isSelected: boolean;
}

export const ButtonTable = styled.div<buttonTable>`
  width: 70px;
  height: 70px;
  text-align: center;
  border-radius: 50%;
  line-height: 70px;
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.color : "#adc0c4")};
  @media (max-width: 1500px) {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 20px;
  }
  @media (max-width: 1280px) {
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 18px;
  }

  @media (max-width: 1200px) {
    width: 3.3rem;
    height: 3.3rem;
    line-height: 3.3rem;
    font-size: 18px;
  }
  @media (max-width: 360px) {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 15px;
  }
  @media (max-width: 320px) {
    width: 2.8rem;
    height: 2.8rem;
    line-height: 2.8rem;
  }
`;
