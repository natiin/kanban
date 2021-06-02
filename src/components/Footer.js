import { makeStyles } from "@material-ui/core/styles";
import githubLogo from "../images/GitHub-Mark-32px.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& p": {
      width: "max-content",
      margin: "5px auto",
      padding: "0.5rem",
      fontSize: "0.8rem",
      backgroundColor: "#fff9",
    },
    "& a": {
      color: "black",
      textDecoration: "none",
    },
    marginTop: "0.5rem",
  },
  github: {
    transition: "all 1s ease",
    "&:hover": {
      transform: "rotate(360deg)",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div>
        <a href="https://github.com/natiin">
          <img className={classes.github} src={githubLogo} alt="My GitHub account" />
        </a>
        <p>natii</p>
      </div>
      <div>
        <p>
          Photo by
          <a href="https://unsplash.com/@scottwebb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Scott Webb</a>
          on
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
