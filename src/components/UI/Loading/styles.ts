import { BiLoaderCircle } from "react-icons/bi";
import styled from "styled-components/macro";

export const LoadingText = styled.p`
  width: fit-content;
  font-size: 20px;
  font-style: italic;
  font-weight: 100;
  color: #868686;
  opacity: 1;
  letter-spacing: 0px;
`;
export const LoadingIcon = styled(BiLoaderCircle)`
  color: #868686;
  opacity: 0.7;
  margin-left: 1rem;
`;
export const Content = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
