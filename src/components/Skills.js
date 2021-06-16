import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { AiOutlineHtml5 } from "react-icons/ai";
import { Zoom } from "react-reveal";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPython,
  DiBootstrap,
} from "react-icons/di";
import {
  SiRedux,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { IconContext } from "react-icons";
const useStyles = makeStyles((theme) => ({
  icon_marg: {
    marginRight: "1.3rem",
  },
}));

function Skills() {
  const classes = useStyles();
  const icons = [
    <AiOutlineHtml5 />,
    <DiCss3 />,
    <DiJavascript1 />,
    <DiBootstrap />,
    <DiReact />,
    <DiPython />,
    <br />,
    <SiC />,
    <SiCplusplus />,
    <SiRedux />,
    <SiDjango />,
    <SiFlask />,
    <SiMongodb />,
  ];
  return (
    <Zoom>
      <div className="home_marg">
        <Typography variant="h3" component="h3">
          Skills
        </Typography>
        <div>
          <IconContext.Provider value={{ size: "4.5rem" }}>
            {icons.map((data, key) => {
              return (
                <span key={key} className={classes.icon_marg}>
                  {data}
                </span>
              );
            })}
          </IconContext.Provider>
        </div>
      </div>
    </Zoom>
  );
}

export default Skills;
