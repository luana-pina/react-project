import styled from "styled-components/macro";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.style.alignItems ? props.style.alignItems : "left"};
  flex-direction: ${(props) =>
    props.style.direction ? props.style.direction : "column"};
  padding: 0.5rem;
  box-shadow: 0px 3px 25px #00000014;
  border-top-left-radius: ${(props) =>
    props.borderTopLeftRadius ? props.style.borderBottomLeftRadius : "15px"};
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius ? props.style.borderTopLeftRadius : "15px"};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius
      ? props.style.borderBottomRightRadius
      : "15px"};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius ? props.style.borderTopRightRadius : "15px"};
  background-color: ${(props) =>
    props.style.color ? props.style.color : "#ffffff"};
  border: 1px solid #e2e2e2;
  height: ${(props) => (props.style.height ? props.style.height : "auto")};
  max-height: ${(props) =>
    props.style.maxHeight ? props.style.maxHeight : "100%"};
  max-width: ${(props) =>
    props.style.maxWidht ? props.style.maxWidht : "100%"};
  width: ${(props) => (props.style.width ? props.style.width : "100%")};
  min-width: 200px;

  /* @media (min-width: 1770px) {
    max-width: 340px;
  }
  @media (max-width: 1024px) {
    width: 100% !important;
    max-height: 65% !important;
  }
  @media (max-width: 1324px) {
    max-height: 70% !important;
  } */
`;
