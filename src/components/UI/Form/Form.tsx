import React from "react";
import { Input, Label } from "./style";

const Form: React.FC<{
  label: string;
  input: { type: string; id: string };
  onChange: Function;
}> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        margin: "1.2rem 0",
        alignItems: "center",
      }}
    >
      <Label htmlFor={props.input.id}>{props.label}</Label>
      <Input
        type={props.input.type}
        id={props.input.id}
        onChange={props.onChange}
      />
    </div>
  );
};
export default Form;
