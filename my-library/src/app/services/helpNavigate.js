// TODO
// Cambiar nombre del archivo a navigationHelper.js
// Borrar todos los comentarios, no son necesarios porque la funciones estan bien nombradas
// Cambiar el nombre de los parámetros "props" por uno más especifico
// Sacar este archivo de la carpeta service, y ponerlo dentro de uno de que se llame helpers

//goToBookList
export const goToBookList = (history) => {
  history.push(`/`);
};

//handleAddClick
export const goToAddBookPage = (history) => {
  history.push(`/book/add`);
};

//goToAddAuthorPage
export const goToAddAuthorPage = (history) => {
  history.push(`/author/add`);
};

//goToBookDetail
export const goToBookDetail = (history, props) => {
  history.push(`/book/detail/${props}`);
};

//goToUpdateBookPage
export const goToUpdateBookPage = (history, props) => {
  history.push(`/book/update/${props}`);
};

//goToUpdateAuthorPage
export const goToUpdateAuthorPage = (history, props) => {
  history.push(`/author/update/${props}`);
};

/* export const handleAddClick = (history, props) => {
  history.push(`/book/update/${props}`);
}; */

/* export const handleRemoveClick = (history, props) => {
  history.push(`/book/update/${props}`);
}; */
