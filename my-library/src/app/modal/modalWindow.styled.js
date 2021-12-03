import styled from "styled-components";

//Variables
import { COLORS } from "../../styles/variables/colors";

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #21282ce6;

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
    color: ${COLORS.purple};
  }

  & .button_container {
    display: flex;
    justify-content: center;
    & button {
      width: 90px;
      margin: 5px;
      height: 34px;
      border: none;
      color: white;
      border-radius: 4px;
    }
    & .button_cancel {
      background: ${COLORS.purple};
    }
    & .button_remove {
      background: #e87838bd;
    }
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
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin: 3px;
  background: ${COLORS.special_orange};
  border: none;
  color: white;
  border-radius: 4px;
  position: absolute;
  right: 0px;
  top: 3px;

  & p {
    font-size: 15px;
    color: rgb(91, 141, 207);
  }
`;
