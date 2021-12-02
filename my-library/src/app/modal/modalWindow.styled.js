import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 43, 69, 0.9);

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .modal-container {
    background-color: rgb(224, 224, 224);
    width: 50%;
    border-radius: 5px;
    padding: 24px 32px 16px 32px;
    position: relative;
  }

  & .title-modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  & .button_container {
    display: flex;
    justify-content: center;
  }

  & .button_container div {
    padding: 8px;
    margin: 5px;
    border-radius: 4px;
    font-weight: 300;
    cursor: pointer;
  }
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;

  & p {
    font-size: 15px;
    color: rgb(91, 141, 207);
  }
`;
