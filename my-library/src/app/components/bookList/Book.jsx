// REACT
import React, { useState } from "react";

// COMPONENT
import ModalWindow from "../../modal/ModalWindow";

// STYLES
import { CardStyled } from "./book.styled";

// ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

// REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

// HELPERS
import {
  goToUpdateBookPage,
  goToBookDetail,
  goToUpdateAuthorPage,
} from "../../services/helpNavigate";

function Book(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const editauthor = <FontAwesomeIcon icon={faUserEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;

  let history = useHistory();

  const [hasModalOpen, setHasModalOpen] = useState(false);

  const showModalWindow = () => {
    setHasModalOpen(hasModalOpen ? false : true);
  };

  return (
    <div>
      <CardStyled>
        <h2
          title="more datail"
          className="title"
          onClick={() => goToBookDetail(history, props.id)}
        >
          {props.name}
        </h2>
        <div className="button-container">
          <button
            title="update Book"
            className="button"
            onClick={() => goToUpdateBookPage(history, props.id)}
          >
            {edit}
          </button>
          <button
            title="update author"
            className="button"
            onClick={() => goToUpdateAuthorPage(history, props.author)}
          >
            {editauthor}
          </button>
          <button className="button" onClick={showModalWindow}>
            {remove}
          </button>
        </div>
      </CardStyled>
      {hasModalOpen ? (
        <ModalWindow
          id={props.id}
          name={props.name}
          setHasModalOpen={setHasModalOpen}
        />
      ) : null}
    </div>
  );
}

export default Book;
