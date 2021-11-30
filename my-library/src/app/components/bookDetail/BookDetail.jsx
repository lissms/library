import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

//SERVICE/ API
import { getBookDetails, getAuthorDetails } from "../../services/booksApi";

import PropTypes from "prop-types";

function BookDetail(props) {
  // hooks router
  let myObjetBookParam = useParams();

  const [bookDetail, setBookDetail] = useState({});
  const [authorDetail, setAuthorDetail] = useState({});

  useEffect(() => {
    getBookDetails(myObjetBookParam.id).then((data) => {
      setBookDetail(data);
    });
    getAuthorDetails(bookDetail.authorId).then((data) => {
      setAuthorDetail(data);
    });
  }, []);

  return (
    <div>
      <p>{bookDetail.isbn}</p>
      <p>{bookDetail.bookName}</p>
      <p>
        `${authorDetail.author} ${authorDetail.authorLastName}`
      </p>
    </div>
  );
}

BookDetail.propTypes = {};

export default BookDetail;
