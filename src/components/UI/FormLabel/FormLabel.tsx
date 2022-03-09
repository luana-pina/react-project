import React from "react";
import { Label } from "./style";

const FormLabel: React.FC<{
  label: string;
  inputId: string;
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
      <Label htmlFor={props.inputId}>{props.label}</Label>
      {props.children}
    </div>
  );
};
export default FormLabel;
