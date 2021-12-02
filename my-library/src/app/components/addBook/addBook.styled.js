import styled from "styled-components";

//Variables
import { COLORS } from "../../../styles/variables/colors";

export const AddUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
`;
export const ButtonAddAuthor = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin: 3px;
  background: ${COLORS.special_orange};
  border: none;
  color: white;
  border-radius: 4px;
`;

export const AddUserStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff8c;
  padding: 32px;
  border: 1px solid ${COLORS.special_orange};
  border-radius: 4px;
  position: relative;

  & .add_author {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & select {
      width: 100%;
      border-radius: 4px;
      padding: 6px;
      border: none;
      box-sizing: border-box;
    }
  }
  & .title {
    color: #6d5a7f;
  }
  & .button {
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
  }

  & .from {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 32px;
    & label {
      font-size: 12px;
    }
  }

  & .add-name-label {
    margin-bottom: 4px;
  }

  & .add-birthday-label {
    margin-bottom: 4px;
    margin-top: 10px;
  }

  & input {
    width: 100%;
    border-radius: 4px;
    padding: 6px;
    border: none;
    box-sizing: border-box;
  }

  & .button-save {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    background: gray;
    width: 100%;
    cursor: pointer;
    margin-top: 16px;
    background: ${COLORS.special_orange};
    border: 2px solid #6d5a7f;
    transition: all 0.5s;
    color: #6d5a7f;
    font-weight: bold;
  }

  & .button-save:disabled {
    background: #c5c5c5;
    border: 2px solid #969696;
    color: #969696;
  }

  & .user-name {
    color: red;
    font-weight: bold;
  }
`;
