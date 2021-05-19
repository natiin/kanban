import { useContext, memo } from "react";
import { DispatchContext } from "../contexts/todosContext";
import useInputState from "../hooks/useInputState";

function Form() {
  const dispatch = useContext(DispatchContext);
  const [inputTitle, onChangeTitle, clearTitle] = useInputState("");
  const [inputText, onChangeText, clearText] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo", title: inputTitle, text: inputText });
    clearTitle();
    clearText();
  };
  console.log("Form");

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

export default memo(Form);
