import styled from "styled-components/macro";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 4% 0 4% 0;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;
