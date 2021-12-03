// REACT
import React, { useState, useEffect } from "react";

//REACT-REDUX
import { connect } from "react-redux";
import { setLoadingData } from "../../../actionsCreator/actionsCreator.js";

// COMPONENT
import Layaut from "../../layaut/Layaut";
import Book from "./Book";

// SERVICES
import { getBooks } from "../../services/booksApi";

// STYLES
import { ItemListStyled, ListStyle } from "./bookList.styled";

function BookList(props) {
  const [bookList, setBooksList] = useState([]);

  const getBookList = () => {
    props.setLoadingData(true);
    getBooks().then((data) => {
      setBooksList(data);
      props.setLoadingData(false);
      localStorage.clear();
    });
  };

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <Layaut>
      <ListStyle>
        {bookList.map((book, index) => {
          return (
            <ItemListStyled key={index}>
              <Book
                name={book.name}
                id={book.id}
                author={book.author}
                getBookList={getBookList}
              ></Book>
            </ItemListStyled>
          );
        })}
      </ListStyle>
    </Layaut>
  );
}

const mapDispatchToProps = {
  setLoadingData,
};

export default connect(null, mapDispatchToProps)(BookList);
