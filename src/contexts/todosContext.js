import { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
  { id: 1, text: "feed the cat", title: "Cat", completed: false },
  { id: 2, text: "eat breakfast", title: "breakfast", completed: false },
  { id: 3, text: "do shopping", title: "shopping", completed: false },
];

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
