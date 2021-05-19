import React, { useContext } from "react";
import { DispatchContext } from "../contexts/todosContext";
import useInputState from "../hooks/useInputState";

function EditForm(props) {
  const dispatch = useContext(DispatchContext);
  const [inputTitle, onChangeTitle, clearTitle] = useInputState(props.title);
  const [inputText, onChangeText, clearText] = useInputState(props.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputTitle, inputText);
    dispatch({ type: "editTodo", id: props.id, editedTitle: inputTitle, editedText: inputText });
    clearTitle();
    clearText();
    props.toggleEditForm();
  };
  console.log("EditForm");

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ margin: "1rem" }}>
        <label htmlFor="title">Title</label>
        <input id="title" onChange={onChangeTitle} value={inputTitle}></input>
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <textarea id="text" onChange={onChangeText} value={inputText}></textarea>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default EditForm;
