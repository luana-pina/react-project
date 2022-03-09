import React from "react";
import NumberButton from "./NumberButton/NumberButton";
import { Table } from "./styles";

const GameTable: React.FC<{
  range: number;
  color: string;
  selectHandler: Function;
}> = (props) => {
  const rowNumber: number = Math.trunc(props.range / 10);
  const rowNumberMobile: number = Math.trunc(props.range / 6);
  const Lines = [];
  const isMobile = window.screen.availWidth < 650;
  let buttonsNumber: number = props.range;

  if (isMobile) {
    for (let i = 0; i <= rowNumberMobile; i++) {
      const itemsLine = [];
      let count: number = 0;
      while (count < 6 && buttonsNumber > 0) {
        itemsLine.push(
          <NumberButton
            key={count}
            value={props.range - buttonsNumber + 1}
            color={props.color}
            selectHandler={props.selectHandler}
          />
        );
        count++;
        buttonsNumber--;
      }
      Lines.push(<tr key={i}>{itemsLine}</tr>);
    }
  } else {
    for (let i = 0; i <= rowNumber; i++) {
      const itemsLine = [];
      let count: number = 0;
      while (count < 10 && buttonsNumber > 0) {
        itemsLine.push(
          <NumberButton
            key={count}
            value={props.range - buttonsNumber + 1}
            color={props.color}
            selectHandler={props.selectHandler}
          />
        );
        count++;
        buttonsNumber--;
      }
      Lines.push(<tr key={i}>{itemsLine}</tr>);
    }
  }

  return (
    <Table>
      <tbody>{Lines}</tbody>
    </Table>
  );
};

export default GameTable;
