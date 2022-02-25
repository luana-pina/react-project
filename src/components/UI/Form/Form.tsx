import React from "react";
import { Input, Label } from "./style";

const Form: React.FC<{ label: string }> = (props) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        margin: "1.2rem 0",
        alignItems: "center",
      }}
    >
      <Label>{props.label}</Label>
      <Input></Input>
    </form>
  );
};
export default Form;
