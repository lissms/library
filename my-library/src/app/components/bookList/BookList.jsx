// REACT
import React, { useState, useEffect } from "react";

// COMPONENT
import Layaut from "../../layaut/Layaut";
import Book from "./Book";

// SERVICES
import { getBooks } from "../../services/booksApi";

// STYLES
import { ItemListStyled, ListStyle } from "./bookList.styled";

function BookList() {
  const [bookList, setBooksList] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      setBooksList(data);
    });
  }, []);

  return (
    <Layaut>
      <ListStyle>
        {bookList.map((book, index) => {
          return (
            <ItemListStyled key={index}>
              <Book name={book.name} id={book.id} author={book.author}></Book>
            </ItemListStyled>
          );
        })}
      </ListStyle>
    </Layaut>
  );
}

export default BookList;
