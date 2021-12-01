export const handleUpdate = (history, props) => {
  history.push(`/book/update/${props}`);
};
export const handleRemoveClick = (history, props) => {
  history.push(`/book/update/${props}`);
};
export const handleBookListClick = (history) => {
  history.push(`/`);
};
export const handleAddClick = (history, props) => {
  history.push(`/book/update/${props}`);
};
export const handleAddAuthorClick = (history) => {
  history.push(`/author/add`);
};

export const handleDetailClick = (history, props) => {
  history.push(`/book/detail/${props}`);
};

/* import {
  handleUpdate,
  handleRemoveClick,
  handleBookListClick,
} from "../../services/functions";

let history = useHistory();


onClick={() => handleRemoveClick(history, props.id)} */
