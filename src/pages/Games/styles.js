import styled from "styled-components/macro";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px;
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 36%;
`;
export const PageTitle = styled.h3`
  font-size: 23px;
  font-style: italic;
  font-weight: 100;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
`;
export const Subtitle = styled.p`
  font-style: italic;
  font-size: 17px;
  color: #868686;
  font-weight: 600;
`;
export const DescriptionTitle = styled.p`
  font-size: 18px;
  color: #868686;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0px;
`;
export const Description = styled.p`
  font-size: 18px;
  color: #868686;
  font-style: italic;
  margin-top: 2px;
`;
