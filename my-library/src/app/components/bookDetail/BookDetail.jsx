import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

//SERVICE/ API
import { getBookDetails, getAuthorDetails } from "../../services/booksApi";

//Component
import Layaut from "../../layaut/Layaut";

// Styled
import { DetailBookStyled } from "./bookDetail.styled";

//Utilities
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

function BookDetail(props) {
  // icon
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const remove = <FontAwesomeIcon icon={faTrashAlt} />;
  const bookList = <FontAwesomeIcon icon={faBookOpen} />;

  // hooks router
  let myObjetBookParam = useParams();

  const [bookDetail, setBookDetail] = useState({});
  const [authorDetail, setAuthorDetail] = useState({});

  console.log(`object`, authorDetail);
  console.log(`bookDetail.authorId`, bookDetail.authorId);

  useEffect(() => {
    getBookDetails(myObjetBookParam.id).then((data) => {
      setBookDetail(data);
      getAuthorDetails(data.authorId).then((data) => {
        setAuthorDetail(data);
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
            <button className="button">{edit}</button>
            <button className="button">{remove}</button>
            <button className="button">{bookList}</button>
          </div>
        </div>
      </DetailBookStyled>
    </Layaut>
  );
}

BookDetail.propTypes = {};

export default BookDetail;
