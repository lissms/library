import React from "react";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

//SERVICE
import { deleteBook, getBooks } from "../services/booksApi";

//UTILITIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

//STYLES
import { Modal, Close } from "./modalWindow.styled";

function ModalWindow(props) {
  const history = useHistory();

  const closeModalWindow = () => {
    props.setHasModalOpen(false);
  };

  const close = <FontAwesomeIcon icon={faTimesCircle} />;

  return (
    <Modal>
      <div className="modal-container">
        <Close onClick={closeModalWindow}>{close}</Close>
        <div className="title-modal">
          <h3>Are you sure you want delete {props.name} ?</h3>
        </div>
        <div>
          <div className="button_container">
            <button className="button_cancel" onClick={closeModalWindow}>
              Candel
            </button>
            <button
              className="button_remove"
              onClick={() => {
                deleteBook(props.id).then(() => {
                  getBooks();
                  closeModalWindow();
                  history.push("/");
                });
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalWindow;
