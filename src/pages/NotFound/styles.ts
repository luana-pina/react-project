import { MdOutlinePowerOff } from "react-icons/md";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.p`
  width: fit-content;
  font-size: 40px;
  font-style: italic;
  font-weight: 100;
  color: #868686;
  letter-spacing: 0px;
`;

export const PowerOffIcon = styled(MdOutlinePowerOff)`
  color: #b5c401;
`;
export const BackHome = styled.button`
  background-color: #ffffff;
  color: #b5c401;
  border: 2px solid #b5c401;
  border-radius: 10px;
  padding: 1rem;
  font-size: 15px;
  font-style: italic;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  margin-top: 2%;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  :hover {
    color: #ffffff;
    background-color: #b5c401;
  }
`;
