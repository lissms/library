import styled from "styled-components";

// VARIABLES
import { COLORS } from "../../../styles/variables/colors";

export const CardStyled = styled.div`
  background: ${COLORS.gray};
  width: 300px;
  height: 75px;
  margin: 30px 0;
  border-radius: 5px;
  border: 2px solid ${COLORS.special_orange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  & .title {
    color: ${COLORS.purple};
    margin-left: 16px;
    font-size: 24px;
    padding: 5px;
    cursor: pointer;
  }
  & .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
  & .add_author {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
