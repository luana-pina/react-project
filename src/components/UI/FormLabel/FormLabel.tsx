import React from "react";
import { Label } from "./style";

const FormLabel: React.FC<{
  label: string;
  inputId: string;
  style?: { fontSize?: string; justifyContent?: string };
}> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: props.style?.justifyContent || "space-between",
        width: "90%",
        margin: "1.2rem 0",
        alignItems: "center",
      }}
    >
      <Label htmlFor={props.inputId} style={props.style}>
        {props.label}
      </Label>
      {props.children}
    </div>
  );
};
export default FormLabel;
