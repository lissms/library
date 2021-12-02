import React from "react";
//STYLES
import { CardStyled } from "./book.styled";
//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserEdit } from "@fortawesome/free-solid-svg-icons";
//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
//FUNTION HANDLER
import {
  handleUpdate,
  handleDetailClick,
  handleUpdateAuthor,
} from "../../services/functions";

function Book(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const editauthor = <FontAwesomeIcon icon={faUserEdit} />;

  let history = useHistory();

  return (
    <div>
      <CardStyled>
        <h2
          title="more datail"
          className="title"
          onClick={() => handleDetailClick(history, props.id)}
        >
          {props.name}
        </h2>
        <div className="button-container">
          <button
            title="update Book"
            className="button"
            onClick={() => handleUpdate(history, props.id)}
          >
            {edit}
          </button>
          <button
            title="update author"
            className="button"
            onClick={() => handleUpdateAuthor(history, props.author)}
          >
            {editauthor}
          </button>
        </div>
      </CardStyled>
    </div>
  );
}

export default Book;
