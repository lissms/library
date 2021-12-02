import React from "react";
import PropTypes from "prop-types";

// Styled
import { CardStyled } from "./book.styled";

//Utilities

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
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
        <p
          title="more datail"
          className="title"
          onClick={() => handleDetailClick(history, props.id)}
        >
          {props.name}
        </p>
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
