import styled from "styled-components";

interface inputs {
  isBlocked?: boolean;
}

export const Label = styled.label`
  font-size: ${(props) => props.style?.fontSize || "15px"};
  min-width: max-content;
  font-style: italic;
  font-weight: 600;
  color: #9d9d9d;
  @media (max-width: 800px) {
    font-size: ${(props) =>
      props.style?.fontSize ? "20px !important" : "15px"};
  }
`;

export const Input = styled.input<inputs>`
  color: #707070;
  border: none;
  width: 90%;
  background-color: ${(props) =>
    props.isBlocked ? "transparent" : "#f5f5f5f5"};
  font-size: ${(props) => (props.isBlocked ? "18px" : "")};
  cursor: text;
  :focus {
    outline: none;
  }
  @media (max-width: 800px) {
    font-size: ${(props) => (props.isBlocked ? "15px !important" : "15px")};
  }
`;
