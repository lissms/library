//REACT
import React, { useState, useEffect } from "react";
//COMPONENTS
import Layout from "../../layaut/Layaut";
//SERVICE
import {
  updateAuthor,
  getAuthorDetails,
  getBooks,
} from "../../services/booksApi";
//STYLES
import { UpdateContainer, UpdateStyle } from "./updateAuthor.styled";
//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
//REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
//FUNCTION NAVIGATE
import { goToBookList } from "../../services/helpNavigate";

function UpdateAuthor(props) {
  const [newAuthorName, setNewAuthorName] = useState("");
  const [newAuthorLastName, setAuthorLastName] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  let { authorId } = useParams();

  let history = useHistory();
  const close = <FontAwesomeIcon icon={faTimesCircle} />;

  useEffect(() => {
    getAuthorDetails(authorId).then((data) => {
      console.log(`dataupdate`, data);
      setNewAuthorName(data.author);
      setAuthorLastName(data.authorLastName);
    });
  }, []);

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <Layout>
      <UpdateContainer>
        <UpdateStyle>
          <h2 className="title">Update Author</h2>
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
            <label className="update-name-label" for="Name">
              Name
            </label>
            <input
              className="update-name"
              onChange={(ev) => {
                setNewAuthorName(ev.target.value);
                setDisabled(false);
              }}
              type="text"
              name="name"
              value={newAuthorName}
              required
            />
            <label className="update-last-name" for="Name">
              Last Name
            </label>
            <input
              className="update-last-name"
              onChange={(ev) => {
                setAuthorLastName(ev.target.value);
                setDisabled(false);
              }}
              type="text"
              id="last-name"
              name="last-name"
              value={newAuthorLastName}
            ></input>
            <input
              className="button-save"
              userName={newAuthorName}
              isbn={newAuthorLastName}
              disabled={disabled === true || newAuthorName === ""}
              onClick={() => {
                updateAuthor(authorId, newAuthorName, newAuthorLastName);
                setMessage(`The Author ${newAuthorName} has been updated`);
              }}
              type="submit"
              value="Update"
            />
          </form>
          <p>{message}</p>
        </UpdateStyle>
      </UpdateContainer>
    </Layout>
  );
}

export default UpdateAuthor;
