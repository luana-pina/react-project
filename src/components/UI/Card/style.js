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
    props.borderTopLeftRadius ? props.style.borderBottomLeftRadius : "10px"};
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius ? props.style.borderTopLeftRadius : "10px"};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius
      ? props.style.borderBottomRightRadius
      : "10px"};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius ? props.style.borderTopRightRadius : "10px"};
  background-color: ${(props) =>
    props.style.color ? props.style.color : "#ffffff"};
  border: 1px solid #e2e2e2;
  height: ${(props) => (props.style.height ? props.style.height : "auto")};
  max-height: ${(props) =>
    props.style.maxHeight ? props.style.maxHeight : "100%"};
  width: ${(props) => (props.style.width ? props.style.width : "100%")};
`;
