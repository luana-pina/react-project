import styled from "styled-components/macro";

export const BackdropContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;
export const ModalContent = styled.div`
  position: fixed;
  top: 5vh;
  left: 5%;
  width: 30%;
  height: 20%;
  max-height: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    left: calc(50% - 15%);
    top: calc(50% - 10%);
  }
  @media (max-width: 768px) {
    width: 20rem;
    height: 10rem;
    left: calc(50% - 10rem);
    top: calc(50% - 6rem);
  }
  @media (max-width: 425px) {
    width: 18rem;
    height: 10rem;
    left: calc(50% - 10rem);
    top: calc(50% - 9rem);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
