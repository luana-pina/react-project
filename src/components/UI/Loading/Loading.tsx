import React from "react";
import { Content, LoadingIcon, NotFoundText } from "./styles";

const Loading: React.FC<{}> = (props) => {
  return (
    <Content>
      <LoadingIcon size={25} />
      <NotFoundText>Loading</NotFoundText>
    </Content>
  );
};

export default Loading;
