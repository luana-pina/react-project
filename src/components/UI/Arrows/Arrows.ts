import styled from "styled-components/macro";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

interface arrows {
  margin?: string;
}

export const RightArrow = styled(HiOutlineArrowRight)<arrows>`
  margin: ${(props) => props.margin};
  margin-left: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
  @media (max-width: 670px) {
    width: 1.5rem;
  }
`;
export const LeftArrow = styled(HiOutlineArrowLeft)<arrows>`
  margin-right: 0.6vw;
  color: ${(props) => (props.color ? props.color : "#707070")};
  cursor: pointer;
`;
