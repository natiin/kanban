import { createContext } from "react";
import todoReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import uuid from "react-uuid";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = {
  todo: [
    { id: uuid(), text: "feed the cat", title: "Cat", status: "todo" },
    { id: uuid(), text: "eat breakfast", title: "breakfast", status: "todo" },
    { id: uuid(), text: "do shopping", title: "shopping", status: "todo" },
  ],
  inProgress: [],

  done: [],
};

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
