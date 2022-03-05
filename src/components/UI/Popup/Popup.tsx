import React from "react";
import { MdCancel } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiLoaderCircle } from "react-icons/bi";
import { Content } from "./styles";

const Popup: React.FC<{ type: string; opacity: number }> = (props) => {
  const { type } = props;
  return (
    <Content opacity={props.opacity}>
      <p>{props.children}</p>
      {type === "success" && <BsFillCheckCircleFill color="green" size={23} />}
      {type === "error" && <MdCancel color="red" size={25} />}
      {type === "loading" && <BiLoaderCircle color="#adc0c4" size={25} />}
    </Content>
  );
};

export default Popup;
