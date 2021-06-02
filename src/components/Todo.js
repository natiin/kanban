import { useContext, memo } from "react";
import { DispatchContext } from "../contexts/todosContext";
import useToggleState from "../hooks/useToggleState";
import EditForm from "./EditForm";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 1,
    display: "inline-block",
    width: "10em",
    fontFamily: "Kalam",
  },
  CardContent: { textAlign: "left" },
  CardActions: {
    backgroundColor: "#ffffff8c",
    padding: 0,
  },
  title: {
    fontWeight: "400",
    fontSize: "1.3rem",
  },
  text: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: "700",
    fontSize: "1.2rem",
  },
  pos: {
    marginBottom: 12,
  },
  IconButton: {
    marginLeft: "auto",
  },
  CreateRoundedIcon: {
    color: "#3a86ff",
  },
  DeleteIcon: {
    color: "#ff006e",
  },
});

function Todo(props) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);

  function handleRemove(e) {
    dispatch({ type: "removeTodo", id: props.id, status: props.status });
  }

  const backgroundColor = () => {
    if (props.status === "todo") return "#e983c9";
    if (props.status === "inProgress") return "#fdf389";
    if (props.status === "done") return "#a4e457";
  };

  return (
    <Card className={classes.root} style={{ backgroundColor: backgroundColor() }}>
      {isEditing ? (
        <EditForm id={props.id} title={props.title} text={props.text} status={props.status} toggleEditForm={toggle} />
      ) : (
        <>
          <CardContent className={classes.CardContent}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
              {props.text}
            </Typography>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <IconButton aria-label="delete" onClick={toggle} className={classes.IconButton}>
              <CreateRoundedIcon className={classes.CreateRoundedIcon} />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleRemove}>
              <DeleteIcon className={classes.DeleteIcon} />
            </IconButton>
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default memo(Todo);
