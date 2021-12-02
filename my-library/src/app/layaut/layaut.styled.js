import styled from "styled-components";

//Images
import background from "../../asset/images/library-background.jpg";

//Variables
import { COLORS } from "../../styles/variables/colors";

export const HeaderStyled = styled.header`
  background: ${COLORS.black};
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 12vh;
  top: 0;
  box-sizing: border-box;
  & .title {
    color: white;
    margin-left: 16px;
    font-weight: 100;
    font-size: 24px;
    padding: 5px;
  }
  & .logo {
    width: 42px;
  }
  & .button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export const ContentStyled = styled.div`
  background-image: ${COLORS.general_background} url(${background});
  padding: 12vh 0;
  box-sizing: border-box;
  min-height: 100vh;
`;

export const ButtonStyled = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: absolute;
  bottom: 5px;
  right: 16px;
`;

export const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0;
  background: ${COLORS.black_strong};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 16px;
`;
