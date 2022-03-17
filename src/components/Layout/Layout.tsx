import React from "react";
import { Wrapper, Header } from "@components/";
import { PageContent } from "./style";

const Layout: React.FC<{ isHome?: boolean | undefined }> = (props) => {
  return (
    <Wrapper direction="column">
      <Header isHome={props.isHome} />
      <PageContent>{props.children}</PageContent>
    </Wrapper>
  );
};

export default Layout;
