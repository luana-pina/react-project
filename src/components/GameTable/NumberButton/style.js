import styled from "styled-components/macro";

export const ButtonTable = styled.div`
  width: 70px;
  height: 70px;
  margin: 3px;
  text-align: center;
  border-radius: 50%;
  line-height: 70px;
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.color : "#adc0c4")};
`;
