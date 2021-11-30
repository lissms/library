//GET

export const getBooks = () => {
  return fetch("https://my-json-server.typicode.com/lissms/library-db/db")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const getBookDetails = (id) => {
  return fetch(`https://my-json-server.typicode.com/lissms/library-db/db`)
    .then((response) => response.json())
    .then((data) => {
      return {
        name: data.name,
        birthdate: data.birthdate,
      };
    });
};

//POST

export const addBook = (name, birthdate) => {
  return fetch(`https://my-json-server.typicode.com/lissms/library-db/db`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, birthdate }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//PUT

export const updateBook = (id, name, birthdate) => {
  return fetch(`https://my-json-server.typicode.com/lissms/library-db/db`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, birthdate }),
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
