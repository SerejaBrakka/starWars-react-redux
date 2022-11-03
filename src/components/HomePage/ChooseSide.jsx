import React from "react";

import classes from "./ChooseSide.module.css";

import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
  useTheme,
} from "@context/ThemeProvider";

import blackSide from "./img/blackSide.jpg";
import lightSide from "./img/lightSide.jpg";
import neitralSide from "./img/neitralSide.jpg";

const ChooseSide = () => {
  const isTheme = useTheme();
  return (
    <div className={classes.wrapper__container}>
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
      <div className={classes.wrapper}>
        <img
          className={classes.container__img3}
          src={neitralSide}
          onClick={() => isTheme.change(THEME_NEITRAL)}
        />
      </div>
    </div>
  );
};

export default ChooseSide;
