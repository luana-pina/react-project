import React from "react";
import NumberButton from "./NumberButton/NumberButton";
import { Table } from "./styles";

const GameTable: React.FC<{ range: number; color: string }> = (props) => {
  const rowNumber: number = Math.trunc(props.range / 10);
  const Lines = [];
  let buttonsNumber: number = props.range;

  for (let i = 0; i <= rowNumber; i++) {
    const itemsLine = [];
    let count: number = 0;
    while (count < 10 && buttonsNumber > 0) {
      itemsLine.push(
        <NumberButton
          key={count}
          value={props.range - buttonsNumber + 1}
          color={props.color}
        />
      );
      count++;
      buttonsNumber--;
    }
    Lines.push(<tr key={i}>{itemsLine}</tr>);
  }

  return (
    <Table>
      <tbody>{Lines}</tbody>
    </Table>
  );
};

export default GameTable;
