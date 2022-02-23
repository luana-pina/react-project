import React from "react";
import Header from "../Header/Header";
import { PageContent, Wrapper } from "./style";

const Layout: React.FC = (props) => {
  return (
    <Wrapper>
      <Header />
      <PageContent>{props.children}</PageContent>
    </Wrapper>
  );
};

export default Layout;
