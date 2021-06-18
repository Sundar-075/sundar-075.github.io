import React from "react";
import { AppBar, Toolbar, makeStyles, Grid } from "@material-ui/core";
import { GitHub, MailOutline, LinkedIn, Instagram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
  },
  curs: {
    cursor: "pointer",
  },
  tool_h: {
    minHeight: "90px",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.tool_h}>
        <Grid
          container
          spacing={4}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item>
            <MailOutline
              className={classes.curs}
              onClick={() => {
                window.location.href = "mailto:sundarsai364@gmail.com";
              }}
            />
          </Grid>
          <Grid item>
            <LinkedIn
              className={classes.curs}
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/sundar-sai-teja-peri-19003a200/";
              }}
            />
          </Grid>
          <Grid item>
            <GitHub
              className={classes.curs}
              onClick={() => {
                window.location.href = "https://github.com/Sundar-075";
              }}
            />
          </Grid>
          <Grid item>
            <Instagram
              className={classes.curs}
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/thesundar_s_teja/";
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
