import styled from "styled-components/macro";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
  }
`;
export const ShowCart = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: fit-content;
  height: 5%;
  background-color: #ffffff;
  padding: 0.5rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 3px 25px #00000014;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 36%;
  @media (max-width: 1024px) {
    width: 30%;
    justify-content: left;
  }
  @media (max-width: 768px) {
    position: fixed;
    top: 20%;
    right: 0;
    width: 35%;
    justify-content: left;
  }
  @media (max-width: 735px) {
    top: 20%;
    width: 60%;
    max-width: 300px;
  }
  @media (max-width: 400px) {
    top: 15%;
    width: 60%;
  }
`;
export const PageTitle = styled.h3`
  font-size: 27px;
  font-style: italic;
  font-weight: 100;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
export const Subtitle = styled.p`
  font-style: italic;
  font-size: 20px;
  color: #868686;
  font-weight: 600;
  @media (max-width: 400px) {
    margin-top: 0;
    font-size: 18px;
  }
`;
export const DescriptionTitle = styled.p`
  font-size: 20px;
  color: #868686;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
export const Description = styled.p`
  font-size: 20px;
  color: #868686;
  font-style: italic;
  margin-top: 2px;
  @media (max-width: 1024px) {
    font-size: 18px;
    margin-top: 8px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
