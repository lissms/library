import styled from "styled-components";

export const ItemListStyled = styled.li`
  list-style: none;
`;
export const ListStyle = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  gap: 16px;
  padding: 0px;
  margin-top: 16px;

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 16px;
  }

  @media all and (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
  }
`;
