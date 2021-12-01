import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getAuthor } from "../../../services/booksApi";

function SelectAuthor(props) {
  const [authorList, setAuthorList] = useState([]);

  console.log(`authorList`, authorList);

  useEffect(() => {
    getAuthor().then((data) => {
      setAuthorList(data);
    });
  }, []);

  return (
    <div>
      <select name="select" onChange={props.onChange}>
        {authorList.map((author, index) => {
          return (
            <option key={index} value={author.id}>
              {`${author.first_name} ${author.last_name}`}
            </option>
          );
        })}
      </select>
    </div>
  );
}

SelectAuthor.propTypes = {};

export default SelectAuthor;
