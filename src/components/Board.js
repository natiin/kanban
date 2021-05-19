import React, { useContext } from "react";
import Todo from "./Todo";
import Form from "./Form";
import { TodosContext } from "../contexts/todosContext";

function Board(props) {
  const todos = useContext(TodosContext);

  const todosAll = todos.map((todo) => <Todo title={todo.title} id={todo.id} text={todo.text} completed={todo.completed} key={todo.id} />);
  console.log("Board");
  return (
    <div>
      {todosAll}
      <Form />
    </div>
  );
}

export default Board;
