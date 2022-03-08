import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackdropContent, Content, ModalContent } from "./styles";

const Backdrop: React.FC<{ onClose: Function }> = (props) => {
  return <BackdropContent onClick={props.onClose}></BackdropContent>;
};
const ModalOverlay: React.FC<{}> = (props) => {
  return (
    <ModalContent>
      <Content>{props.children}</Content>
    </ModalContent>
  );
};
const portalElement = document.getElementById("overlays");

const Modal: React.FC<{ onClose: Function }> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement ? portalElement : document.createElement("div")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement ? portalElement : document.createElement("div")
      )}
    </Fragment>
  );
};

export default Modal;
