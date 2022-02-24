import styled from "styled-components/macro";
import { HiOutlineArrowRight } from "react-icons/hi";

export const LeftArrow = styled(HiOutlineArrowRight)`
  margin-left: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
`;
