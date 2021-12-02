import React from "react";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//Images-logos
import logo from "../../asset/images/icono_short.png";
import logoLarge from "../../asset/images/Logo.png";
import book from "../../asset/images/book.png";

// Styled
import {
  HeaderStyled,
  ContentStyled,
  ButtonStyled,
  FooterStyled,
} from "./layaut.styled";

function Layaut(props) {
  const history = useHistory();

  return (
    <div>
      <HeaderStyled>
        <img className="logo" src={logo} alt="icono" />
        <h1 className="title"> My Library</h1>
      </HeaderStyled>

      <ContentStyled>{props.children}</ContentStyled>

      <FooterStyled>
        <img src={logoLarge} alt="" />
        <ButtonStyled
          title="Add book"
          onClick={() => history.push("/book/add")}
        >
          <img src={book} alt="book" />
        </ButtonStyled>
      </FooterStyled>
    </div>
  );
}

Layaut.propTypes = {};

export default Layaut;
