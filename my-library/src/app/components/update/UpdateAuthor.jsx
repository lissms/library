// REACT
import React, { useState, useEffect } from "react";

// COMPONENTS
import Layout from "../../layaut/Layaut";

// SERVICE
import {
  updateAuthor,
  getAuthorDetails,
  getBooks,
} from "../../services/booksApi";

// STYLES
import { CardContainerStyle, CardStyle } from "../../../styles/cardTeme.styled";

// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// HELPERS
import { goToBookList } from "../../services/helpNavigate";

function UpdateAuthor() {
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
      <CardContainerStyle>
        <CardStyle>
          <h2 className="title">Update Author</h2>
          <button
            title="Close"
            className="button"
            onClick={() => {
              goToBookList(history);
            }}
          >
            {close}
          </button>
          <form className="form" onSubmit={handleFormSubmit}>
            <label className="update-name-label" for="Name">
              Name
            </label>
            <input
              onChange={(ev) => {
                setNewAuthorName(ev.target.value);
                setDisabled(false);
              }}
              type="text"
              name="name"
              value={newAuthorName}
              required
            />
            <label for="Name">Last Name</label>
            <input
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
        </CardStyle>
      </CardContainerStyle>
    </Layout>
  );
}

export default UpdateAuthor;
