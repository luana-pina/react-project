import styled from "styled-components/macro";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 4% 0 4% 0;
  @media (min-width: 2280px) {
    max-width: 1800px;
    padding: 4% calc((100% - 1800px) / 2);
  }
  @media (min-width: 1900px) {
    max-width: 1800px;
    padding: 4% calc((100% - width) / 2);
  }
  @media (max-width: 1160px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    padding-bottom: 8%;
  }
`;
