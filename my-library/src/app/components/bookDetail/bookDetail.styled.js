import styled from "styled-components";

//Variables
import { COLORS } from "../../../styles/variables/colors";

export const DetailBookStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .card {
    position: relative;
    background: ${COLORS.gray};
    width: 30%;
    margin: 30px 0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25px;
    color: ${COLORS.black};
    font-weight: bold;

    & .book-name {
      font-size: 24px;
    }
    & .author-name {
      font-size: 16px;
    }
    & .isbn {
      font-size: 24px;
    }
  }
  & .button-container {
    background: ${COLORS.special_orange};
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
  }
  & .button {
    color: white;
    background: none;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    outline: inherit;
    font-size: 24px;
  }
`;
