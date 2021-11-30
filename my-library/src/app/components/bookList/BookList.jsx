import React, { useState, useEffect } from "react";

//Services
import { getBooks } from "../../services/booksApi";
// Components
import Book from "./Book";

// Styled
import { ItemListStyled } from "./bookList.styled";

import PropTypes from "prop-types";

function BookList(props) {
  const [bookList, setBooksList] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooksList(data.books);
    });
  }, []);

  console.log(`books`, bookList[0]?.name);

  return (
    <ul>
      {bookList.map((book, index) => {
        return (
          <ItemListStyled key={index}>
            <Book name={book.name}></Book>
          </ItemListStyled>
        );
      })}
    </ul>
  );
}

BookList.propTypes = {};

export default BookList;
