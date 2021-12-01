import styled from "styled-components";

export const AddUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
`;

export const AddUserStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff8c;
  padding: 32px;
  border: 1px solid #f17680;
  border-radius: 4px;

  & .title {
    color: #6d5a7f;
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
    background: #f8b18e;
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
