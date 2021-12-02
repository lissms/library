import React, { useState, useEffect } from "react";
//COMPONENT
import Layaut from "../../layaut/Layaut";

//SERVICES
import { getBookDetails, getAuthorDetails } from "../../services/booksApi";
//STYLES
import { DetailBookStyled } from "./bookDetail.styled";
//ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserEdit,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
//REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
//FUNCTION NAVIGATE
import {
  goToUpdateBookPage,
  goToBookList,
  goToUpdateAuthorPage,
} from "../../services/helpNavigate";

function BookDetail(props) {
  const [bookDetail, setBookDetail] = useState({});
  const [authorDetail, setAuthorDetail] = useState({});

  const edit = <FontAwesomeIcon icon={faEdit} />;
  const editauthor = <FontAwesomeIcon icon={faUserEdit} />;
  const bookList = <FontAwesomeIcon icon={faBookOpen} />;

  let { id } = useParams();
  let history = useHistory();

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
              onClick={() => goToUpdateBookPage(history, id)}
            >
              {edit}
            </button>
            <button
              title="update author"
              className="button"
              onClick={() =>
                goToUpdateAuthorPage(history, authorDetail.authorId)
              }
            >
              {editauthor}
            </button>

            <button
              title="Back to book list"
              className="button"
              onClick={() => goToBookList(history)}
            >
              {bookList}
            </button>
          </div>
        </div>
      </DetailBookStyled>
    </Layaut>
  );
}

export default BookDetail;
