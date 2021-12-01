//GET

export const getBooks = () => {
  return fetch("https://my-json-server.typicode.com/lissms/library-db/books")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getAuthor = () => {
  return fetch("https://my-json-server.typicode.com/lissms/library-db/authors")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getBookDetails = (id) => {
  return fetch(
    `https://my-json-server.typicode.com/lissms/library-db/books/${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      return {
        bookName: data.name,
        isbn: data.isbn,
        authorId: data.author,
      };
    });
};
export const getAuthorDetails = (author) => {
  return fetch(
    `https://my-json-server.typicode.com/lissms/library-db/authors/${author}`
  )
    .then((response) => response.json())
    .then((data) => {
      return {
        author: data.first_name,
        authorLastName: data.last_name,
      };
    });
};

//POST

export const addBook = (name, isbn, author) => {
  return fetch(`https://my-json-server.typicode.com/lissms/library-db/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, isbn: isbn, author: author }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const addAuthor = (author) => {
  return fetch(
    `https://my-json-server.typicode.com/lissms/library-db/authors`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author }),
    }
  )
    .then((response) => response.json())
    .then((data) => data);
};

//PUT

export const updateBook = (id, book, author, isbn) => {
  return fetch(`https://my-json-server.typicode.com/lissms/library-db/db`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, book, author, isbn }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//DELETE

export const deleteBook = (id) => {
  return fetch(`https://my-json-server.typicode.com/lissms/library-db/db`, {
    method: "DELETE",
  });
};
