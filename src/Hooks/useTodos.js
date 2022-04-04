import { useEffect, useState } from "react";

const LSpostKey = "post";

const useTodos = () => {
  /* const [title, setTitle] = useState([]);
  const createNewTitle = (textTitle) => {
    const addNewTitle = {
      id: Date.now(),
      textTitle,
    };
    setTitle((prev) => [...prev, addNewTitle]);
  }; */
  const [post, setPost] = useState([]);

  const createNewPost = (title, image, tag, text) => {
    const addNewPost = {
      id: Date.now(),
      title,
      image,
      text,
      tag,
      completed: false,
    };

    setPost((prev) => [...prev, addNewPost]);
  };

  const deletePost = (id) => {
    setPost((prev) => prev.filter((posts) => posts.id !== id));
    /*     setTitle((prev) => prev.filter((titles) => titles.id !== id));
     */
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSpostKey);
    if (dataFromLS) {
      setPost(JSON.parse(dataFromLS));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LSpostKey, JSON.stringify(post));
  }, [post]);

  return {
    post,

    deletePost,
    createNewPost,
  };
};

export default useTodos;
