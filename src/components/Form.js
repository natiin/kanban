import { useContext } from "react";
import { DispatchContext } from "../contexts/todosContext";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    margin: "1rem auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  text: {
    width: "40ch",
  },
  button: {
    width: "auto",
    margin: "10px",
  },
}));

function Form(props) {
  const dispatch = useContext(DispatchContext);
  const [inputTitle, onChangeTitle, clearTitle] = useInputState("To do");
  const [inputText, onChangeText, clearText] = useInputState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.length) return;
    dispatch({ type: "addTodo", title: inputTitle, text: inputText });
    clearTitle();
    clearText();
  };

  const handleClick = (e) => {
    props.handleClick();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField id="title" label="title" onChange={onChangeTitle} value={inputTitle} className={classes.title} />
      <TextField id="text" label="todo..." onChange={onChangeText} value={inputText} className={classes.text} />
      <div>
        <Button variant="contained" color="secondary" type="submit" size="small" className={classes.button} onClick={handleClick}>
          ADD
        </Button>
        <Button variant="contained" color="primary" type="submit" size="small" className={classes.button} onClick={handleClick}>
          CLOSE
        </Button>
      </div>
    </form>
  );
}

export default Form;
