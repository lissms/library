import React from "react";
import PropTypes from "prop-types";

// Styled
import { CardStyled } from "./book.styled";

//UTILITIES
import { COLORS } from "../../../styles/variables/colors.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

function Book(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <div>
      <CardStyled>
        <p className="title">{props.name}</p>
        <div className="button-container">
          <button className="button">{edit}</button>
          <button className="button">{remove}</button>
        </div>
      </CardStyled>
    </div>
  );
}

export default Book;
