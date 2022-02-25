import styled from "styled-components/macro";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

export const RightArrow = styled(HiOutlineArrowRight)`
  margin-left: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
`;
export const LeftArrow = styled(HiOutlineArrowLeft)`
  margin-right: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
`;
