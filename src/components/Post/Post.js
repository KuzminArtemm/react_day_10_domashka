import { useContext } from "react";
import { TodoListContext } from "../Contexts/ToDoListContext";
import PostItem from "../PostItem/PostItem";

const Post = () => {
  const { post } = useContext(TodoListContext);
  return (
    <ul className="list-group list-group-flush">
  
      <li>
        {post.map((posts, i) => {
          return (
            <PostItem
              key={posts.id}
              id={posts.id}
              title={posts.title}
              image={posts.image}
              text={posts.text}
              tag={posts.tag}
              index={i}
            />
          );
        })}
      </li>
      
    </ul>
  );
};

export default Post;
