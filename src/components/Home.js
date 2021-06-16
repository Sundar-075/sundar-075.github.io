import React from "react";
import { Typography, Grid, Button, Link, makeStyles } from "@material-ui/core";
import { Zoom } from "react-reveal";
import "../App.css";
import Pdf from "../Documents/MyResume.pdf";
const useStyles = makeStyles((theme) => ({
  a_link: {
    textDecoration: "None",
    color: "white",
    "&:hover": {
      textDecoration: "None",
      color: "rgb(98, 235, 228)",
    },
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className="home_marg">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Grid item xs={12} sm={6}>
          <Zoom>
            <Typography variant="h3" component="h4">
              Hello ! I'm
              <br />
              <span>P V Sundar Sai Teja</span>.
              <br />
              <br /> I'm a Computer Science <br />
              Engineer who has lots of dreams.
            </Typography>
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
      </Grid>
    </div>
  );
}

export default Home;
