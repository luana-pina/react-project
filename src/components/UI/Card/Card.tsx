import React from "react";
import { Direction } from "readline";
import { Content } from "./style";

const Card: React.FC<{
  style?: {
    color?: string;
    borderTopLeftRadius?: string;
    borderBottomLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomRightRadius?: string;
    width?: string;
    height?: string;
    maxHeight?: string;
    alignItems?: string;
    rowDirection?: boolean;
  };
}> = (props) => {
  return <Content style={props.style}>{props.children}</Content>;
};

export default Card;
