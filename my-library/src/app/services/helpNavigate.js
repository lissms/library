export const goToBookList = (history) => {
  history.push(`/`);
};

export const goToAddBookPage = (history) => {
  history.push(`/book/add`);
};

export const goToAddAuthorPage = (history) => {
  history.push(`/author/add`);
};

export const goToBookDetail = (history, props) => {
  history.push(`/book/detail/${props}`);
};

export const goToUpdateBookPage = (history, props) => {
  history.push(`/book/update/${props}`);
};

export const goToUpdateAuthorPage = (history, props) => {
  history.push(`/author/update/${props}`);
};
