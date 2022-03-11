import styled from "styled-components/macro";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px;
  justify-content: space-between;
  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
  }
  @media (max-width: 800px) {
    margin-top: 8vw;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  @media (max-width: 1020px) {
    width: 80%;
    justify-content: center;
  }
  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media (min-width: 1900px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 40%;
    justify-content: left;
  }
  @media (max-width: 1020px) {
    margin-top: 10vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const PageTitle = styled.h3`
  font-size: 27px;
  font-style: italic;
  font-weight: 100;
  text-transform: uppercase;
  color: #707070;
  letter-spacing: 0px;
  @media (min-width: 1900px) {
    font-size: 30px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
  }
`;
export const Subtitle = styled.p`
  font-style: italic;
  font-size: 20px;
  color: #868686;
  font-weight: 600;
  @media (min-width: 1900px) {
    font-size: 25px;
  }
  @media (max-width: 420px) {
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

  @media (min-width: 1900px) {
    font-size: 25px;
  }
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;
export const Description = styled.p`
  font-size: 20px;
  color: #868686;
  font-style: italic;
  margin-top: 2px;
  @media (min-width: 1900px) {
    font-size: 22px;
  }
  @media (max-width: 1050px) {
    font-size: 18px;
    margin-top: 8px;
  }
  @media (max-width: 420px) {
    font-size: 15px;
  }
`;
