import React from "react";
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
    direction?: string;
    alignItems?: string;
  };
}> = (props) => {
  return <Content style={props.style}>{props.children}</Content>;
};

export default Card;
