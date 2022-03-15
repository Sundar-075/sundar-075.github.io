import { React, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  makeStyles,
  CardActions,
  Link,
  withStyles,
} from "@material-ui/core";
const TextTypography = withStyles({
  root: {
    color: "#B3B3B3",
  },
})(Typography);
const useStyles = makeStyles((theme) => ({
  card: {
    color: "white",
    border: "none",
    background: "#404040",
    boxShadow: "none",
  },
  span_marg: {
    marginRight: "0.8rem",
    cursor: "pointer",
    color: "#B3B3B3",
  },
  div_type: {
    display: "flex",
    flexWrap: "wrap",
  },
  git_link: {
    marginLeft: "8px",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(98, 235, 228)",
      textDecorationLine: "None",
    },
  },
}));
function Projects({ name, description, lang_url, url, visit_url }) {
  const [lang, setLang] = useState([]);
  useEffect(() => {
    fetch(lang_url)
      .then((res) => res.json())
      .then((data) => setLang(data));
  }, []);

  const classes = useStyles();
  return (
    <Card classes={{ root: classes.card }}>
      <CardHeader title={name} />
      <CardContent>
        <TextTypography variant="subtitle2" color={classes.text_color}>
          {description}
        </TextTypography>
        <br />
        <Typography variant="h6">
          <strong>Tech stack</strong>
          <br />
          <div className={classes.div_type}>
            {Object.keys(lang).map((data) => {
              return (
                <span key={data} className={classes.span_marg}>
                  {data}
                </span>
              );
            })}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Typography className={classes.but}>
          <Link
            rel="noreferrer"
            href={url}
            target="_blank"
            className={classes.git_link}
          >
            Github
          </Link>
        </Typography>
        {visit_url !== "" ? (
          <Typography className={classes.but}>
            <Link
              rel="noreferrer"
              href={visit_url}
              target="_blank"
              className={classes.git_link}
            >
              Visit
            </Link>
          </Typography>
        ) : null}
      </CardActions>
    </Card>
  );
}

export default Projects;
