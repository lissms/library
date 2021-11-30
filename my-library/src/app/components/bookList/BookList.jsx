import React, { useState, useEffect } from "react";

//Services
import { getBooks } from "../../services/booksApi";

// Components
import Book from "./Book";

// Styled
import { ItemListStyled } from "./bookList.styled";

import Layaut from "../../layaut/Layaut";

import PropTypes from "prop-types";

function BookList(props) {
  const [bookList, setBooksList] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooksList(data.books);
    });
  }, []);

  return (
    <Layaut>
      <ul>
        {bookList.map((book, index) => {
          return (
            <ItemListStyled key={index}>
              <Book name={book.name} id={book.id}></Book>
            </ItemListStyled>
          );
        })}
      </ul>
    </Layaut>
  );
}

BookList.propTypes = {};

export default BookList;
