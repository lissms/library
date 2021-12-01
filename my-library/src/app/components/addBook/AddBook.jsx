import React, { useState } from "react";
import PropTypes from "prop-types";

import Layaut from "../../layaut/Layaut";
import { addBook, getBooks } from "../../services/booksApi";

import SelectAuthor from "./select/SelectAuthor";

//STYLES
import { AddUserContainer, AddUserStyle } from "./addBook.styled";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

import { handleBookListClick } from "../../services/functions";

function AddBook(props) {
  const [newBookName, setNewBookName] = useState("");
  const [newIsbn, setNewIsbn] = useState("");
  const [idAuthor, setIdAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  let history = useHistory();

  console.log(`newBookName, newIsbn, idAuthor`, newBookName, newIsbn, idAuthor);

  return (
    <Layaut>
      <AddUserContainer>
        <AddUserStyle>
          <h2 className="title">Add new Book</h2>
          <form className="from" onSubmit={handleFormSubmit}>
            <label className="add-name-book-label" for="Name">
              Name Book
            </label>
            <input
              className="add-name-book"
              onChange={(ev) => {
                setNewBookName(ev.target.value);
              }}
              type="text"
              name="name-book"
              id="name-book"
              placeholder="Name book"
              required
            />
            <label className="add-author" for="Name">
              isbn
            </label>
            <input
              className="add-isbn"
              onChange={(ev) => {
                setNewIsbn(ev.target.value);
              }}
              type="text"
              id="isbn"
              name="isbn"
              required
            ></input>
            <input
              className="button-add-author"
              disabled={newBookName === "" || newIsbn === "" || idAuthor === ""}
              onClick={() => {
                addBook(newBookName, newIsbn, idAuthor);
                setMessage(`The book named ${newBookName} has been update`);
              }}
              type="submit"
              value="save"
            />

            <SelectAuthor
              onChange={(ev) => {
                setIdAuthor(ev.target.value);
              }}
            />
            <input
              className="button-save"
              name={newBookName}
              isbn={newIsbn}
              idAuthor={idAuthor}
              disabled={newBookName === "" || newIsbn === "" || idAuthor === ""}
              onClick={() => {
                addBook(newBookName, newIsbn, idAuthor);
                setMessage(`The book named ${newBookName} has been update`);
              }}
              type="submit"
              value="save"
            />
          </form>
          <p>{message}</p>
        </AddUserStyle>
        <button
          className="button"
          onClick={() => {
            handleBookListClick(history);
            getBooks();
          }}
        >
          X
        </button>
      </AddUserContainer>
    </Layaut>
  );
}

AddBook.propTypes = {};

export default AddBook;
