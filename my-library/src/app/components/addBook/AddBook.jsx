import React, { useState } from "react";
//COMPONENT
import Layaut from "../../layaut/Layaut";
import SelectAuthor from "./select/SelectAuthor";
//SERVICES
import { addBook, getBooks } from "../../services/booksApi";
//STYLES
import { CardStyle, CardContainerStyle } from "../../../styles/cardTeme.styled";
import { ButtonAddAuthor, AddAuthorStyle } from "./addBook.styled";
//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
//FUNCTION NAVIGATE
import { goToBookList, goToAddAuthorPage } from "../../services/helpNavigate";

function AddBook(props) {
  const [newBookName, setNewBookName] = useState("");
  const [newIsbn, setNewIsbn] = useState("");
  const [idAuthor, setIdAuthor] = useState("");
  const [message, setMessage] = useState("");

  const addAuthor = <FontAwesomeIcon icon={faUserPlus} />;
  const close = <FontAwesomeIcon icon={faTimesCircle} />;

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  let history = useHistory();

  return (
    <Layaut>
      <CardContainerStyle>
        <CardStyle>
          <h2 className="title">Add new Book</h2>
          <button
            title="Close"
            className="button"
            onClick={() => {
              goToBookList(history);
              getBooks();
            }}
          >
            {close}
          </button>
          <form className="from" onSubmit={handleFormSubmit}>
            <label className="add-name-book-label" for="Name">
              Name Book
            </label>
            <input
              onChange={(ev) => {
                setNewBookName(ev.target.value);
              }}
              type="text"
              name="name-book"
              id="name-book"
              placeholder="Name book"
              required
            />
            <label for="Name">isbn</label>
            <input
              onChange={(ev) => {
                setNewIsbn(ev.target.value);
              }}
              type="text"
              id="isbn"
              name="isbn"
              required
            ></input>

            <label for="Name">Author</label>
            <AddAuthorStyle>
              <ButtonAddAuthor
                title="Add author"
                onClick={() => {
                  goToAddAuthorPage(history);
                }}
              >
                {addAuthor}
              </ButtonAddAuthor>

              <SelectAuthor
                onChange={(ev) => {
                  setIdAuthor(ev.target.value);
                }}
              />
            </AddAuthorStyle>
            <input
              className="button-save"
              name={newBookName}
              isbn={newIsbn}
              idAuthor={idAuthor}
              disabled={newBookName === "" || newIsbn === "" || idAuthor === ""}
              onClick={() => {
                addBook(newBookName, newIsbn, idAuthor);
                setMessage(`The book named ${newBookName} has been added`);
              }}
              type="submit"
              value="save"
            />
          </form>
          <p>{message}</p>
        </CardStyle>
      </CardContainerStyle>
    </Layaut>
  );
}

export default AddBook;
