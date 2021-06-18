import React from "react";
import {
  AppBar,
  Grid,
  Button,
  Typography,
  Toolbar,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import { BiUpArrowAlt } from "react-icons/bi";

const TextTypography = withStyles({
  root: {
    color: "#B3B3B3",
    // marginTop: "2rem",
  },
})(Typography);
const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
  },
  footer_but: {
    color: "#B3B3B3",
    fontSize: "0.80rem",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Button
              variant="text"
              className={classes.footer_but}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <BiUpArrowAlt />
              Back to top
            </Button>
          </Grid>
          <Grid item>
            <TextTypography variant="subtitle2">&copy; P Sundar</TextTypography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
