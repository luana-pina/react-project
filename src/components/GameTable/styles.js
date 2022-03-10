import styled from "styled-components/macro";

export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 1vw;
  margin-top: 5%;

  @media (max-width: 695px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 375px) {
    grid-row-gap: 3px;
  }
`;
