import React from "react";
import { Content } from "./style";

const Card: React.FC = (props) => {
  return <Content>{props.children}</Content>;
};

export default Card;
