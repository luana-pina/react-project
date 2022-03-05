import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  width: 24vw;
  top: 1vw;
  left: calc(50% - 12vw);
  opacity: ${(props) => props.opacity};
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: opacity 0.3s;
`;
