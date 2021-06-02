import Board from "./components/Board";
import Footer from "./components/Footer";
import { TodosProvider } from "./contexts/todosContext";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Kalam", "Montserrat", "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles({
  App: {
    margin: " 0",
    padding: "1rem",
    textAlign: "center",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <TodosProvider>
          <Board />
        </TodosProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
