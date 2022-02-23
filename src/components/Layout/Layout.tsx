import React from "react";
import Header from "../Header/Header";
import { PageContent, Wrapper } from "./style";

const Layout: React.FC<{ isHome?: boolean | undefined }> = (props) => {
  return (
    <Wrapper>
      <Header isHome={props.isHome} />
      <PageContent>{props.children}</PageContent>
    </Wrapper>
  );
};

export default Layout;
