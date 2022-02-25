import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const BottomText = styled.p`
  text-align: center;
  width: max-content;
  font-size: 75px;
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  color: #707070;
`;
export const PageTitle = styled.p`
  width: max-content;
  font-size: 33px;
  font-style: italic;
  font-weight: bold;
  margin: 0 0 1.2rem 0;
  color: #707070;
`;
export const DecoratedText = styled.div`
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  width: 8rem;
  height: 2.2rem;
  background-color: #b5c401;
  border-radius: 80px;
  text-align: center;
  line-height: 2.2rem;
  color: #ffffff;
  margin: 0;
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  padding: 2% 0;
  height: 70%;
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
  font-size: 55px;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  color: #707070;
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
`;
export const SubmitButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
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
`;
