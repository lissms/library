const url = "http://localhost:3001";

//GET

export const getBooks = () => {
  return fetch(`${url}/books`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getAuthor = () => {
  return fetch(`${url}/authors`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getBookDetails = (id) => {
  return fetch(`${url}/books/${id}`)
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
  return fetch(`${url}/authors/${author}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        authorId: data.id,
        author: data.first_name,
        authorLastName: data.last_name,
      };
    });
};

// POST

export const addBook = (name, isbn, author) => {
  return fetch(`${url}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, isbn: isbn, author: author }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const addAuthor = (first_name, last_name) => {
  return fetch(`${url}/authors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, last_name }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//PUT

export const updateBook = (id, name, isbn) => {
  return fetch(`${url}/books/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, isbn }),
  })
    .then((response) => response.json())
    .then((data) => data);
};
export const updateAuthor = (authorId, name, lastName) => {
  return fetch(`${url}/authors/${authorId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: name,
      last_name: lastName,
    }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//DELETE

export const deleteBook = (id) => {
  return fetch(`${url}/books/${id}`, {
    method: "DELETE",
  });
};
