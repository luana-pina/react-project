import { Direction } from "readline";
import styled from "styled-components/macro";

interface cartContent {
  style?: {
    color?: string;
    borderTopLeftRadius?: string;
    borderBottomLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomRightRadius?: string;
    width?: string;
    height?: string;
    maxHeight?: string;
    alignItems?: string;
    rowDirection?: boolean | undefined;
  };
}

export const Content = styled.div<cartContent>`
  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.style?.alignItems ? props.style.alignItems : "left"};
  flex-direction: ${(props) => (props.style?.rowDirection ? "row" : "column")};
  padding: 0.5rem;
  box-shadow: 0px 3px 25px #00000014;
  border-top-left-radius: ${(props) =>
    props.style?.borderTopLeftRadius
      ? props.style?.borderBottomLeftRadius
      : "15px"};
  border-top-right-radius: ${(props) =>
    props.style?.borderTopRightRadius
      ? props.style?.borderTopLeftRadius
      : "15px"};
  border-bottom-left-radius: ${(props) =>
    props.style?.borderBottomLeftRadius
      ? props.style.borderBottomRightRadius
      : "15px"};
  border-bottom-right-radius: ${(props) =>
    props.style?.borderBottomRightRadius
      ? props.style?.borderTopRightRadius
      : "15px"};
  background-color: ${(props) =>
    props.style?.color ? props.style.color : "#ffffff"};
  border: 1px solid #e2e2e2;
  height: ${(props) => (props.style?.height ? props.style.height : "auto")};
  max-height: ${(props) =>
    props.style?.maxHeight ? props.style.maxHeight : "100%"};
  max-width: ${(props) =>
    props.style?.maxWidth ? props.style.maxWidth : "100%"};
  width: ${(props) => (props.style?.width ? props.style.width : "100%")};
  min-width: 200px;
`;
