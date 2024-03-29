import { AiTwotoneEdit } from "react-icons/ai";
import styled from "styled-components";

interface saveButton {
  isBlocked?: boolean;
}

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.3fr;
  grid-template-areas:
    "img name icon"
    "img email ."
    ". buttons  ."
    "title title title"
    "games games games";
  align-items: center;
  justify-items: center;
  width: 55%;
  height: max-content;
  padding: 2rem 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 25px #00000014;
  @media (max-width: 1400px) {
    width: 85%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1.5fr 0.3fr;
    padding-bottom: 4rem;
  }
  @media (max-width: 420px) {
    margin-top: 4vh;
    grid-template-columns: 1fr 0.05fr;
    grid-template-areas:
      "img icon"
      "name name"
      "email email"
      ". buttons"
      "title title"
      "games games";
  }
`;
export const ProfileImg = styled.img`
  display: grid;
  grid-area: img;
  width: 50%;
  border-radius: 50%;
  border: 1px solid #00000014;
`;

export const NameArea = styled.div`
  grid-area: name;
  width: 90%;
  height: max-content;
  justify-self: start;
  align-self: end;
  @media (max-width: 420px) {
    padding: 2rem 1rem 0rem 1rem;
  }
`;
export const EmailArea = styled.div`
  grid-area: email;
  width: 90%;
  height: max-content;
  justify-self: start;
  align-self: start;
  @media (max-width: 420px) {
    padding: 0rem 1rem;
  }
`;
export const GamesArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-area: games;
  width: 92%;
  max-height: 35vh;
  overflow: auto;
  scrollbar-width: 5px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 4px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb {
    background: #e2e2e2;
  }
  @media (max-width: 768px) {
    max-height: 250px;
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    max-height: 22vh;
  }
`;

export const GamesAreaTitle = styled.p`
  margin-top: 3rem;
  padding-left: 2rem;
  grid-area: title;
  font-size: 22px;
  min-width: max-content;
  justify-self: start;
  font-style: italic;
  font-weight: 600;
  color: #9d9d9d;
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 420px) {
    margin-top: 2rem;
    padding-left: 1rem;
  }
`;

export const AreaButtons = styled.div`
  display: grid;
  width: max-content;
  column-gap: 1rem;
  justify-items: center;
  grid-template-columns: max-content max-content;
  grid-template-areas: "save cancel";
  grid-area: buttons;
  justify-self: start;
  cursor: pointer;
`;
export const EditIcon = styled(AiTwotoneEdit)`
  grid-area: icon;
  align-self: start;
  justify-self: end;
  margin-right: 1rem;
  cursor: pointer;
  @media (max-width: 420px) {
    width: 1.2rem;
  }
`;
export const SaveButton = styled.button<saveButton>`
  width: 4rem;
  padding: 2%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.color};
  color: #ffffff;
  background-color: ${(props) => (props.isBlocked ? "#afafaf" : "#b5c401")};
  font-size: 15px;
  font-weight: 600;
  margin-right: 4%;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  grid-area: save;
  cursor: ${(props) => (props.isBlocked ? "not-allowed" : "pointer")};
`;
export const CancelButton = styled.button`
  width: 4rem;
  padding: 2%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.color};
  color: #ffffff;
  background-color: #bb0a1e;
  font-size: 15px;
  font-weight: 600;
  margin-right: 4%;
  cursor: pointer;
  :active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
  grid-area: cancel;
  cursor: pointer;
`;
