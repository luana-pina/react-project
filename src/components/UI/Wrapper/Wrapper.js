import styled from "styled-components/macro";

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  @media (min-width: 1900px) {
    justify-content: ${(props) =>
      props.direction === "row" ? "center" : "auto"};
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
