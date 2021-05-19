// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import useLocalStorageState from "../hooks/useLocalStorageState";

// export default function useTodoState(initialTodos) {
//   const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

//   return {
//     todos,
//     addTodo(newTodo) {
//       setTodos([...todos, { id: uuidv4(), completed: false, title: newTodo.title, text: newTodo.text }]);
//     },
//     removeTodo(id) {
//       const updatedTodos = todos.filter((todo) => todo.id !== id);
//       setTodos(updatedTodos);
//     },
//     toggleTodo(id) {
//       const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
//       setTodos(updatedTodos);
//     },
//     editTodo({ id, editedText, editedTitle }) {
//       const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, title: editedTitle, text: editedText } : todo));
//       setTodos(updatedTodos);
//     },
//   };
// }
