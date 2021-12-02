import React, { useState } from "react";
//COMPONENT
import Layaut from "../../layaut/Layaut";
//SERVICES
import { addAuthor, getBooks } from "../../services/booksApi";
//STYLES
import { AddUserContainer, AddUserStyle } from "./addAuthor.styled";
//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
//FUNTION HANDLER
import { goToBookList } from "../../services/functions";

function AddAuthor(props) {
  const [authorName, setAuthorName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");
  const [message, setMessage] = useState("");

  const close = <FontAwesomeIcon icon={faTimesCircle} />;

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  let history = useHistory();

  return (
    <Layaut>
      <AddUserContainer>
        <AddUserStyle>
          <h2 className="title">Add new Author</h2>
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
            <label className="add-name-label" for="Name">
              Name Author
            </label>
            <input
              className="add-name-book"
              onChange={(ev) => {
                setAuthorName(ev.target.value);
              }}
              type="text"
              name="name-author"
              id="name-author"
              placeholder="Name author"
              required
            />
            <label className="add-author" for="Name">
              Last Name Author
            </label>
            <input
              className="add-isbn"
              onChange={(ev) => {
                setAuthorLastName(ev.target.value);
              }}
              type="text"
              id="last-name"
              name="last-name"
              required
            ></input>

            <input
              className="button-save"
              name={authorName}
              lastName={authorLastName}
              disabled={authorName === "" || authorLastName === ""}
              onClick={() => {
                addAuthor(authorName, authorLastName);
                setMessage(
                  `The author ${authorLastName}, ${authorName}  has been added`
                );
              }}
              type="submit"
              value="save"
            />
          </form>
          <p>{message}</p>
        </AddUserStyle>
      </AddUserContainer>
    </Layaut>
  );
}

export default AddAuthor;
