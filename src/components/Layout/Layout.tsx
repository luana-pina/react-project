import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../shared/interfaces";
import Header from "../Header/Header";
import Popup from "../UI/Popup/Popup";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import { PageContent } from "./style";

const Layout: React.FC<{ isHome?: boolean | undefined }> = (props) => {
  const popup = useSelector((state: IRootState) => state.popup);

  return (
    <Wrapper direction="column">
      <Popup opacity={popup.opacity} type={popup.type}>
        {popup.message}
      </Popup>
      <Header isHome={props.isHome} />
      <PageContent>{props.children}</PageContent>
    </Wrapper>
  );
};

export default Layout;
