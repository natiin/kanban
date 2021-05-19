import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: uuidv4(), completed: false, title: action.title, text: action.text }];

    case "removeTodo":
      return state.filter((todo) => todo.id !== action.id);

    case "toggleTodo":
      return state.map((todo) => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));

    case "editTodo":
      return state.map((todo) => (todo.id === action.id ? { ...todo, title: action.editedTitle, text: action.editedText } : todo));
    default:
      return state;
  }
}

export default reducer;
