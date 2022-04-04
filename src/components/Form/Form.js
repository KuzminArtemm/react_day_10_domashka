import { useContext, useState } from "react";
import { TodoListContext } from "../Contexts/ToDoListContext";

const Form = () => {
  const { createNewPost } = useContext(TodoListContext);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [tag, setTag] = useState("")
  /* const { createNewTitle } = useContext(TodoListContext); */
  /* const  [textTitle, setTextTitle]  = useState(""); */
  const changeHandlerTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeHandlerImage = (e) => {
    setImage(e.target.value);
  };
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const changeHandlerTag = (e) => {
    setTag(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newTitle = title.trim();
    let newImage = image.trim()
    let newText = text.trim();
    let newTag = tag.trim();
    
    if (newTitle) {
      createNewPost(newTitle);
      setTitle("");
    }
    if (newImage) {
      createNewPost(newImage);
      setImage(""); 
    }
    if (newText) {
      createNewPost(newText);
      setText("");
    }
    if (newTag) {
      createNewPost(newTag);
      setTag("");
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center"
      >
        <div className="mb-3 mt-3">
          <input
            onChange={changeHandlerTitle}
            value={title}
            type="text"
            className="form-control"
            placeholder="Заголовок"
          />
        </div>
        <div className="mb-3">
        
  
  <input onChange={changeHandlerImage} value={image} className="form-control" type="file" id="formFile" placeholder="Добавить изображение" />

         
        </div>

        <div className="mb-3">
          <textarea
            onChange={changeHandler}
            name="content"
            className="form-control"
            rows="3"
            placeholder="Ваш текст..."
            value={text}
          ></textarea>
        </div>

        <div className="mb-3">
          <input
          onChange={changeHandlerTag}
          value={tag}
            name="title"
            placeholder="Напишите тег"
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
