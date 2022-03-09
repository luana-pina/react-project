import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const BottomText = styled.p`
  text-align: center;
  width: max-content;
  font-size: 80px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  color: #707070;
  @media (max-width: 1024px) {
    font-size: 65px;
  }
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;
export const PageTitle = styled.p`
  width: max-content;
  font-size: 33px;
  font-style: italic;
  font-weight: bold;
  margin: 0 0 1.2rem 0;
  color: #707070;
  @media (max-width: 1024px) {
    font-size: 30px;
    margin: 0 0 0.2rem 0;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    margin: 0;
  }
`;
export const DecoratedText = styled.div`
  font-size: 22px;
  font-style: italic;
  font-weight: 600;
  width: 8.5rem;
  height: 3rem;
  background-color: #b5c401;
  border-radius: 80px;
  text-align: center;
  line-height: 3rem;
  color: #ffffff;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 18px;
    width: 7rem;
    height: 2rem;
    line-height: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    width: 5rem;
    height: 1.7rem;
    line-height: 1.7rem;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  padding: 2% 0;
  max-height: 550px;
  height: 70%;
  @media (max-width: 1024px) {
    max-height: 400px;
  }
  @media (max-width: 768px) {
    max-height: 300px;
    padding: 1% 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100vh;
`;
export const UpperText = styled.p`
  text-align: center;
  width: min-content;
  font-size: 75px;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  color: #707070;
  @media (max-width: 1024px) {
    font-size: 55px;
  }
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;
export const Forget = styled(Link)`
  text-align: right;
  width: 93%;
  font-size: 15px;
  font-style: italic;
  font-weight: 100;
  margin-top: 5%;
  color: #c1c1c1;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: #b5c401;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 2rem 0;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    margin: 1.5rem;
  }
`;
export const Redirect = styled.p`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  text-decoration: none;
  color: #707070;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 2rem 0;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
    margin: 1rem 0;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    margin: 0;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 1.2rem 0;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 300px;
  }
  @media (max-width: 768px) {
    max-width: 250px;
  }
`;
