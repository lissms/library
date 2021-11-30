import React from "react";
import PropTypes from "prop-types";

// Styled
import { CardStyled } from "./book.styled";

//Utilities
import { COLORS } from "../../../styles/variables/colors.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

function Book(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  let history = useHistory();

  const handleClick = () => {
    history.push(`/book/detail/${props.id}`);
  };

  return (
    <div>
      <CardStyled onClick={handleClick}>
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
