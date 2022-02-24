import styled from "styled-components/macro";

export const ButtonTable = styled.div`
  width: 60px;
  height: 60px;
  margin: 3px;
  text-align: center;
  border-radius: 50%;
  line-height: 60px;
  color: #ffffff;
  font-weight: 700;
  font-size: 19px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? props.color : "#adc0c4")};
`;
