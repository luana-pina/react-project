import React from "react";
import NumberButton from "./NumberButton/NumberButton";
import { Table } from "./styles";

const GameTable: React.FC<{
  range: number;
  color: string;
  selectHandler: Function;
}> = (props) => {
  const Lines = [];
  let buttonsNumber: number = props.range;

  for (let i = 0; i < buttonsNumber; i++) {
    Lines.push(
      <NumberButton
        key={i}
        value={i + 1}
        color={props.color}
        selectHandler={props.selectHandler}
      />
    );
  }

  return <Table>{Lines}</Table>;
};

export default GameTable;
