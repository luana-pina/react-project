import React from "react";
import { Content, LoadingIcon, LoadingText } from "./styles";

const Loading: React.FC<{}> = (props) => {
  return (
    <Content>
      <LoadingIcon size={25} />
      <LoadingText>Loading</LoadingText>
    </Content>
  );
};

export default Loading;
