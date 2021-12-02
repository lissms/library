// REACT
import React, { useEffect, useState } from "react";

// SERVICE
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
        <option value=""></option>
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

export default SelectAuthor;
