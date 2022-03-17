import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@interfaces/";
import { ButtonTable } from "./styles";

const NumberButton: React.FC<{
  value: number;
  color: string;
  selectHandler: Function;
}> = (props) => {
  const cardNumbers = useSelector(
    (state: IRootState) => state.cardGame.card.choosen_numbers
  );

  return (
    <td>
      <ButtonTable
        isSelected={cardNumbers.some((item) => item === props.value)}
        color={props.color}
        onClick={() => {
          props.selectHandler(props.value);
        }}
      >
        {props.value}
      </ButtonTable>
    </td>
  );
};

export default NumberButton;
