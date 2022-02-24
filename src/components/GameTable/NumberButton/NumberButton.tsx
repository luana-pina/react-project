import React, { useState } from "react";
import { ButtonTable } from "./style";

const NumberButton: React.FC<{ value: number; color: string }> = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <td>
      <ButtonTable
        isSelected={isSelected}
        color={props.color}
        onClick={() => setIsSelected(!isSelected)}
      >
        {props.value}
      </ButtonTable>
    </td>
  );
};

export default NumberButton;
