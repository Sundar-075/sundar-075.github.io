import React from "react";
import {
  Typography,
  Grid,
  Button,
  Link,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { Zoom } from "react-reveal";
import "../App.css";
import Pdf from "../Documents/MyResume.pdf";
import arc_reactor from "../assets/arc_reactor.gif";
const TextTypography = withStyles({
  root: {
    color: "#B3B3B3",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  a_link: {
    textDecoration: "None",
    color: "white",
    "&:hover": {
      textDecoration: "None",
      color: "rgb(98, 235, 228)",
    },
    name: {
      color: "white",
    },
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className="home_marg">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Zoom>
            <TextTypography variant="h2" component="h4">
              Hello ! I'm
              <br />
            </TextTypography>
            <Typography variant="h2">
              <span>P V Sundar Sai Teja</span>.
            </Typography>
            <TextTypography variant="h3">
              <br /> A Computer
              <br /> Science Engineer🤖 <br />
              from Vizag with great <br /> interest in programming and
              development👨‍💻.
            </TextTypography>

            <br />
            <Button variant="contained" color="primary">
              <Link
                rel="noreferrer"
                href={Pdf}
                target="_blank"
                className={classes.a_link}
              >
                My Resume
              </Link>
            </Button>
          </Zoom>
        </Grid>
        <Grid container xs={12} sm={6} justify="center">
          <img src={arc_reactor} alt="loading..." />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
