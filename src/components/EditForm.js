import React, { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../contexts/todosContext";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: "25ch",
      display: "flex",
      flexDirection: "column",
    },
    margin: "1rem auto",
  },
  text: {
    maxWidth: "40ch",
  },
  button: {
    width: "auto",
    margin: "auto",
  },
}));

function EditForm(props) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [inputTitle, onChangeTitle, clearTitle] = useInputState(props.title);
  const [inputText, onChangeText, clearText] = useInputState(props.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "editTodo", id: props.id, editedTitle: inputTitle, editedText: inputText, status: props.status });
    clearTitle();
    clearText();
    props.toggleEditForm();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField id="title" label="title" onChange={onChangeTitle} value={inputTitle} className={classes.title} />
      <TextField id="text" label="todo..." onChange={onChangeText} value={inputText} className={classes.text} />
      <Button variant="contained" color="primary" type="submit" size="small" className={classes.button}>
        ADD
      </Button>
    </form>
  );
}

export default EditForm;
