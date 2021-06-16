import { React, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  makeStyles,
  CardActions,
  Link,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  card: {
    color: "white",
    background: "#121111",
    boxShadow: "-5px -5px 10px #070707,5px 5px 10px #1d1b1b",
  },
  span_marg: {
    marginRight: "0.8rem",
    cursor: "pointer",
  },
  div_type: {
    display: "flex",
    flexWrap: "wrap",
  },
  git_link: {
    marginLeft: "8px",
    color: "white",
    "&:hover": {
      color: "rgb(98, 235, 228)",
      textDecorationLine: "None",
    },
  },
}));
function Projects({ name, description, lang_url, url }) {
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
        <Typography variant="subtitle2">{description}</Typography>
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
      </CardActions>
    </Card>
  );
}

export default Projects;
