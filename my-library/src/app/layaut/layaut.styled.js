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
    width: 4%;
  }
`;

export const ContentStyled = styled.div`
  background-image: ${COLORS.general_background} url(${background});
  min-height: 94vh;
  padding-top: 12vh;
  box-sizing: border-box;
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
  bottom: 43px;
  right: 16px;
`;

export const FooterStyled = styled.footer`
  background: ${COLORS.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
