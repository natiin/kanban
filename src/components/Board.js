import { useContext } from "react";
import { TodosContext, DispatchContext } from "../contexts/todosContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddTodoDrawer from "./InputDrawer";
import Todo from "./Todo";
import "./Board.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    padding: "1rem",
    fontFamily: "Montserrat",
    color: "black",
    display: "flex",
    height: "1px",
    flexGrow: "1",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#ffffff9e",
    padding: "1rem",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
  },
  GridItem: {
    display: "flex",
    width: "17em",
    height: "100%",
    flexGrow: "1",
  },
  boardName: {
    color: "black",
    letterSpacing: "3px",
    textTransform: "lowercase",
  },
  wrapper: {
    minHeight: "0",
  },
  container: {
    marginTop: "5em",
    flexWrap: "nowrap",
  },
}));

const boardNames = ["to do", "in progress", "done"];

const onDragEnd = (result, todos, dispatch) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    // MOVE BETWEEN COLUMNS
    const sourceColumn = todos[source.droppableId];
    const destColumn = todos[destination.droppableId];
    const [removed] = sourceColumn.splice(source.index, 1);
    removed.status = destination.droppableId;
    destColumn.splice(destination.index, 0, removed);
    dispatch({ type: "move", sourceDroppableId: source.droppableId, sourceColumn: sourceColumn, destinationDroppableId: destination.droppableId, destColumn: destColumn, status: destination.DroppableId });
  } else {
    //REORDER - THE SAME COLUMN
    const column = todos[source.droppableId];
    const [removed] = column.splice(source.index, 1);
    column.splice(destination.index, 0, removed);
    dispatch({ type: "reorder", sourceDroppableId: source.droppableId, column: column });
  }
};

function Board(props) {
  const classes = useStyles();
  const todos = useContext(TodosContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className={classes.root}>
      <AddTodoDrawer />
      <DragDropContext onDragEnd={(result) => onDragEnd(result, todos, dispatch)}>
        <Grid container spacing={3} justify="center" className={classes.container} id="container">
          {Object.entries(todos).map(([columnId, todos], index) => {
            return (
              <Grid item key={columnId} className={classes.GridItem} id="grid-item">
                <Paper className={classes.paper} elevation={1}>
                  <h2 className={classes.boardName}>{boardNames[index]}</h2>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: "50px", overflowY: "auto", flexGrow: "1" }}>
                          {todos.map((todo, i) => {
                            return (
                              <Draggable key={todo.id} draggableId={todo.id} index={i}>
                                {(provided, snapshot) => {
                                  return (
                                    <Grid
                                      item
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <Todo title={todo.title} id={todo.id} text={todo.text} key={todo.id} status={todo.status} />
                                    </Grid>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>
    </div>
  );
}

export default Board;
