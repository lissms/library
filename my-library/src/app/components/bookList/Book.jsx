import React from "react";
import PropTypes from "prop-types";

// Styled
import { CardStyled } from "./book.styled";

//Utilities

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
import { handleUpdate, handleDetailClick } from "../../services/functions";

function Book(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  let history = useHistory();

  return (
    <div>
      <CardStyled>
        <p
          className="title"
          onClick={() => handleDetailClick(history, props.id)}
        >
          {props.name}
        </p>
        <div className="button-container">
          <button
            className="button"
            onClick={() => handleUpdate(history, props.id)}
          >
            {edit}
          </button>
          <button className="button">{remove}</button>
        </div>
      </CardStyled>
    </div>
  );
}

export default Book;
