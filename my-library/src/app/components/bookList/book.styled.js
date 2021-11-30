import styled from "styled-components";

import { COLORS } from "../../../styles/variables/colors";

export const CardStyled = styled.div`
  background: ${COLORS.gray};
  width: 50%;
  margin: 30px 0;
  border-radius: 5px;
  display: flex;
  & .title {
    color: ${COLORS.black};
    margin-left: 16px;
    font-weight: 100;
    font-size: 24px;
    padding: 5px;
  }
`;
