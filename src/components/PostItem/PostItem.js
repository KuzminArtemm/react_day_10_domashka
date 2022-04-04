import { useContext } from "react";
import { TodoListContext } from "../Contexts/ToDoListContext";

const PostItem = ({ id, title, image, text, tag }) => {
  const { deletePost } = useContext(TodoListContext);
  const deleteHandler = () => {
    deletePost(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{image}</span>
      <span>
        {title}
        <br />
        {text}
      </span>
      <span>{tag}</span>
      <div>
        <button type="button" className="mx-1 btn btn-success">
          Нравится:
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="mx-1 btn btn-danger"
        >
          Удалить
        </button>
      </div>
    </li>
  );
};

export default PostItem;
