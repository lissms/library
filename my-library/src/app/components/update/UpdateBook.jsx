//REACT
import React, { useState, useEffect } from "react";
//COMPONENTS
import Layout from "../../layaut/Layaut";
//SERVICE
import { updateBook, getBookDetails, getBooks } from "../../services/booksApi";
//STYLES
import { CardContainerStyle, CardStyle } from "../../../styles/cardTeme.styled";
//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
//REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
//FUNCTION NAVIGATE
import { goToBookList } from "../../services/helpNavigate";

function UpdateBook(props) {
  const [newBookName, setNewBookName] = useState("");
  const [newIsbn, setNewIsbn] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  let { id } = useParams();

  let history = useHistory();

  const close = <FontAwesomeIcon icon={faTimesCircle} />;

  useEffect(() => {
    getBookDetails(id).then((data) => {
      setNewBookName(data.bookName);
      setNewIsbn(data.isbn);
    });
  }, []);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <Layout>
      <CardContainerStyle>
        <CardStyle>
          <h2 className="title">Update Book</h2>
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
            <label for="Name">Update name book</label>
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
            <label for="Name">ISBN</label>
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
                updateBook(id, newBookName, newIsbn);
                setMessage(`The book ${newBookName} has been updated`);
              }}
              type="submit"
              value="Update"
            />
          </form>
          <p>{message}</p>
        </CardStyle>
      </CardContainerStyle>
    </Layout>
  );
}
UpdateBook.propTypes = {};

export default UpdateBook;
