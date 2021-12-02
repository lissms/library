import React from "react";
//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
//SERVICES
import { getBooks } from "../services/booksApi";
//STYLES
import {
  HeaderStyled,
  ContentStyled,
  ButtonStyled,
  FooterStyled,
} from "./layaut.styled";
//IMAGES
import logo from "../../asset/images/icono_short.png";
import logoLarge from "../../asset/images/Logo.png";
import book from "../../asset/images/book.png";
//FUNCTION NAVIGATE
import { goToAddBookPage, goToBookList } from "../services/helpNavigate";

function Layaut(props) {
  const history = useHistory();

  return (
    <div>
      <HeaderStyled>
        <button
          title="Close"
          className="button"
          onClick={() => {
            goToBookList(history);
            getBooks();
          }}
        >
          <img className="logo" src={logo} alt="icono" />
        </button>
        <h1 className="title"> My Library</h1>
      </HeaderStyled>

      <ContentStyled>{props.children}</ContentStyled>

      <FooterStyled>
        <img src={logoLarge} alt="" />
        <ButtonStyled
          title="Add book"
          onClick={() => {
            goToAddBookPage(history);
          }}
        >
          <img src={book} alt="book" />
        </ButtonStyled>
      </FooterStyled>
    </div>
  );
}

export default Layaut;
