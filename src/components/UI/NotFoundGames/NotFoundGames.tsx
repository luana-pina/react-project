import React from "react";
import { MdOutlineSearchOff } from "react-icons/md";
import { Content, GameIcon, NotFoundText } from "./styles";

const NotFoundGames: React.FC<{ isCart?: boolean | undefined }> = (props) => {
  return (
    <Content>
      {props.isCart ? (
        <GameIcon size={25} color="#868686" opacity={"0.7"} />
      ) : (
        <MdOutlineSearchOff size={30} color="#868686" />
      )}
      <NotFoundText isCart={props.isCart}>
        {props.isCart ? "No Games" : "Not found games!"}
      </NotFoundText>
    </Content>
  );
};

export default NotFoundGames;
