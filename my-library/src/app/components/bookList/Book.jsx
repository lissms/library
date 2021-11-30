import React from "react";
import PropTypes from "prop-types";

// Styled
import { CardStyled } from "./book.styled";

//UTILITIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faUserEdit,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

function Book(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <div>
      <CardStyled>
        <p className="title">{props.name}</p>
        <button>{edit}</button>
        <button>{remove}</button>
      </CardStyled>
    </div>
  );
}

export default Book;
