import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return { ...state, todo: [...state.todo, { id: uuidv4(), title: action.title, text: action.text, status: "todo" }] };

    case "removeTodo":
      const updatedArr = state[action.status].filter((todo) => todo.id !== action.id);
      return { ...state, [action.status]: updatedArr };

    case "editTodo":
      const updateArr = state[action.status].map((todo) => (todo.id === action.id ? { ...todo, title: action.editedTitle, text: action.editedText } : todo));
      return { ...state, [action.status]: updateArr };

    case "move":
      return {
        ...state,
        [action.sourceDroppableId]: action.sourceColumn,
        [action.destinationDroppableId]: action.destColumn,
      };

    case "reorder":
      return {
        ...state,
        [action.sourceDroppableId]: action.column,
      };

    default:
      return state;
  }
}

export default reducer;
