import styled from "styled-components/macro";

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
`;