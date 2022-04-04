import { createContext } from "react";
import useTodos from "../../Hooks/useTodos";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const { post, deletePost, createNewPost } = useTodos();

  return (
    <TodoListContext.Provider
      value={{ post, createNewPost, deletePost }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
export { TodoListContext };
