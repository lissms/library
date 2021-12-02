import styled from "styled-components";

//Variables
import { COLORS } from "../../../styles/variables/colors";

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

export const AddAuthorStyle = styled.div`
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
`;
