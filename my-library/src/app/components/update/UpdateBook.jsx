//REACT// HOOKS
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//SERVICE/ API
import { updateBook, getBookDetails, getBooks } from "../../services/booksApi";

//COMPONENTS
import Layout from "../../layaut/Layaut";

import { handleBookListClick } from "../../services/functions";

//STYLES
import { UpdateContainer, UpdateStyle } from "./updateBook.styled";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

function UpdateBook(props) {
  const [newBookName, setNewBookName] = useState("");
  const [newIsbn, setNewIsbn] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  let myObjetParam = useParams();

  let history = useHistory();

  useEffect(() => {
    getBookDetails(myObjetParam.id).then((data) => {
      setNewBookName(data.bookName);
      setNewIsbn(data.isbn);
    });
  }, []);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <Layout isButtonBackVisible={true}>
      <UpdateContainer>
        <UpdateStyle>
          <h2 className="title">Update Book</h2>
          <form className="from" onSubmit={handleFormSubmit}>
            <label className="update-name-label" for="Name">
              Update name book
            </label>
            <input
              className="update-name"
              onChange={(ev) => {
                setNewBookName(ev.target.value);
                setDisabled(false);
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={newBookName}
              required
            />
            <label className="update-isbn" for="Name">
              ISBN
            </label>
            <input
              className="update-birthday"
              onChange={(ev) => {
                setNewIsbn(ev.target.value);
                setDisabled(false);
              }}
              type="text"
              id="isbn"
              name="isbn"
              value={newIsbn}
            ></input>
            <input
              className="button-save"
              userName={newBookName}
              isbn={newIsbn}
              disabled={disabled === true || newBookName === ""}
              onClick={() => {
                updateBook(myObjetParam.id, newBookName, newIsbn);
                setMessage(`The book ${newBookName} has been updated`);
              }}
              type="submit"
              value="Update"
            />
            <button
              className="button"
              onClick={() => {
                handleBookListClick(history);
                getBooks();
              }}
            >
              X
            </button>
          </form>
          <p>{message}</p>
        </UpdateStyle>
      </UpdateContainer>
    </Layout>
  );
}
UpdateBook.propTypes = {};

export default UpdateBook;
