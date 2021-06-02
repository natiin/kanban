import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Form from "./Form";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    textAlign: "center",

    form: {
      width: "maxContent",
    },
  },
  absolute: {
    position: "absolute",
    top: theme.spacing(2),
    left: theme.spacing(3),
    backgroundColor: "#b38ce0",
  },
}));

function AddTodoDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
  });

  const handleDrawerOpen = () => {
    setState({ top: true });
  };

  const handleDrawerClose = () => {
    setState({ top: false });
  };
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ top: open });
  };

  const handleClick = (e) => {
    if (e.target.id === "text" || e.target.id === "title") {
      handleDrawerOpen();
    } else if (e.target === "span") {
      handleDrawerClose();
    }
  };

  const input = () => (
    <>
      <div className={clsx(classes.list, classes.fullList)} role="presentation" onClick={handleClick}>
        <Form handleClick={handleDrawerClose} />
      </div>
    </>
  );

  return (
    <div>
      <div key="top">
        <Fab color="primary" className={classes.absolute} onClick={toggleDrawer(true)}>
          <AddIcon />
        </Fab>
        <Drawer anchor="top" open={state.top} onClose={toggleDrawer(false)}>
          {input()}
        </Drawer>
      </div>
    </div>
  );
}

export default AddTodoDrawer;
