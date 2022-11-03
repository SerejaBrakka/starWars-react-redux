import React from "react";

import { PropTypes } from "prop-types";

import {
  useTheme,
  THEME_LIGHT,
  THEME_NEITRAL,
  THEME_DARK,
} from "@context/ThemeProvider";
import blackSide from "./img/blackSide.jpg";
import lightSide from "./img/lightSide.jpg";
import neitralSide from "./img/neitralSide.jpg";
import classes from "./ChooseSide.module.css";

const ChooseSide = () => {
  const isTheme = useTheme();
  return (
    <div>
      <div className={classes.container}>
        <img
          src={blackSide}
          className={classes.container__img1}
          onClick={() => isTheme.change(THEME_DARK)}
        />

        <img
          src={lightSide}
          className={classes.container__img2}
          onClick={() => isTheme.change(THEME_LIGHT)}
        />
      </div>
      <div className={classes.wrapper__img3}>
        <img
          className={classes.container__img3}
          src={neitralSide}
          onClick={() => isTheme.change(THEME_NEITRAL)}
        />
      </div>
    </div>
  );
};

ChooseSide.propTypes = {};

export default ChooseSide;
