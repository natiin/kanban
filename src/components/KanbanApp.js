import Board from "./Board";
import { TodosProvider } from "../contexts/todosContext";

function KanbanApp() {
  return (
    <div>
      <TodosProvider>
        <Board />
      </TodosProvider>
      <TodosProvider>
        <Board />
      </TodosProvider>
    </div>
  );
}

export default KanbanApp;

//
