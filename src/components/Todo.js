import { useContext, memo } from "react";
import { DispatchContext } from "../contexts/todosContext";
import useToggleState from "../hooks/useToggleState";
import EditForm from "./EditForm";

function Todo(props) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  function handleRemove(e) {
    dispatch({ type: "removeTodo", id: props.id });
  }

  function handleToggle() {
    dispatch({ type: "toggleTodo", id: props.id });
  }
  console.log("Todo");

  return (
    <ul style={{ width: "600px" }}>
      {isEditing ? (
        <EditForm id={props.id} title={props.title} text={props.text} toggleEditForm={toggle} />
      ) : (
        <li>
          <label htmlFor={props.id}></label>
          <input type="checkbox" id={props.id} onChange={handleToggle}></input>
          {props.title} : {props.text}
          <button onClick={handleRemove}>remove</button>
          <button onClick={toggle}>edit</button>
        </li>
      )}
    </ul>
  );
}

export default memo(Todo);
