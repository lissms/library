import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

//SERVICE/ API
import { getBookDetails, getAuthorDetails } from "../../services/booksApi";

//Component
import Layaut from "../../layaut/Layaut";

//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";

// Styled
import { DetailBookStyled } from "./bookDetail.styled";
// Funtion

import {
  handleUpdate,
  handleRemoveClick,
  handleBookListClick,
  handleUpdateAuthor,
} from "../../services/functions";

//Utilities
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faUserEdit,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

function BookDetail(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const editauthor = <FontAwesomeIcon icon={faUserEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;
  const bookList = <FontAwesomeIcon icon={faBookOpen} />;

  // hooks router
  let { id } = useParams();

  let history = useHistory();

  const [bookDetail, setBookDetail] = useState({});
  const [authorDetail, setAuthorDetail] = useState({});

  console.log(`object`, authorDetail);
  console.log(`bookDetail.authorId`, bookDetail.authorId);

  useEffect(() => {
    getBookDetails(id).then((data) => {
      setBookDetail(data);
      getAuthorDetails(data.authorId).then((author) => {
        setAuthorDetail(author);
      });
    });
  }, []);

  return (
    <Layaut>
      <DetailBookStyled>
        <div className="card">
          <p className="book-name">{bookDetail.bookName}</p>
          <p className="author-name">
            {authorDetail.author} {authorDetail.authorLastName}
          </p>
          <p className="isbn"> ISBN: {bookDetail.isbn}</p>
          <div className="button-container">
            <button
              title="update book"
              className="button"
              onClick={() => handleUpdate(history, id)}
            >
              {edit}
            </button>
            <button
              title="update author"
              className="button"
              onClick={() => handleUpdateAuthor(history, authorDetail.authorId)}
            >
              {editauthor}
            </button>

            <button
              title="Back to book list"
              className="button"
              onClick={() => handleBookListClick(history)}
            >
              {bookList}
            </button>
          </div>
        </div>
      </DetailBookStyled>
    </Layaut>
  );
}

BookDetail.propTypes = {};

export default BookDetail;
