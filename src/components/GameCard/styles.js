import styled from "styled-components/macro";
import { IoTrashOutline } from "react-icons/io5";

export const DeleteIcon = styled(IoTrashOutline)`
  cursor: pointer;
  align-self: center;
  color: #888888;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 90%;
  padding: 0 0 2% 0;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
  margin-left: 5px;
  margin-top: 10px;
  border-left: 4px solid;
  border-color: ${(props) => props.color};
  border-radius: 4px;
`;
export const SelectedNumbers = styled.p`
  font-size: 15px;
  text-align: left;
  color: #868686;
  font-weight: 600;
  font-style: italic;
  margin: 0px;
`;
export const GameName = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  margin-right: 10px;
  font-size: 16px;
  font-style: italic;
  font-weight: 600;
  color: ${(props) => props.color};
`;
export const ModalTitle = styled.p`
  width: max-content;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  color: #868686;
  margin: 0px;
`;
export const ModalText = styled.p`
  width: fit-content;
  font-size: 18px;
  font-style: italic;
  font-weight: 100;
  color: #868686;
`;
export const Price = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 16px;
  font-style: italic;
  font-weight: 100;
  color: #868686;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
`;
export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  align-self: baseline;
  margin: 0px;
`;

export const ModalButton = styled.button`
  width: 5rem;
  padding: 2%;
  height: auto;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.color};
  color: #ffffff;
  background-color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 600;
  margin-right: 4%;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;
