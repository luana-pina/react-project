import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonTable } from "./style";

const NumberButton: React.FC<{
  value: number;
  color: string;
  selectHandler: Function;
}> = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsSelected(false);
  }, [params]);

  return (
    <td>
      <ButtonTable
        isSelected={isSelected}
        color={props.color}
        onClick={() => {
          props.selectHandler(props.value);
          setIsSelected(!isSelected);
        }}
      >
        {props.value}
      </ButtonTable>
    </td>
  );
};

export default NumberButton;
