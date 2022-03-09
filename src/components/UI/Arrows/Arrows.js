import styled from "styled-components/macro";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

export const RightArrow = styled(HiOutlineArrowRight)`
  margin: ${(props) => props.margin};
  margin-left: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
  @media (max-width: 670px) {
    width: 1.5rem;
  }
`;
export const LeftArrow = styled(HiOutlineArrowLeft)`
  margin-right: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
`;
