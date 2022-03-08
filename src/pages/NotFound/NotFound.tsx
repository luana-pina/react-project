import { BackHome, Content, NotFoundText, PowerOffIcon } from "./styles";
import { useNavigate } from "react-router-dom";
import React from "react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Content>
      <PowerOffIcon size={200} />
      <NotFoundText>Page not found!</NotFoundText>
      <BackHome onClick={() => navigate("/home")}>Back to home page</BackHome>
    </Content>
  );
};

export default NotFound;
