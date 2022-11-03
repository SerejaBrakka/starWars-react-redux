import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

import Favourite from "../Favourite";
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
  useTheme,
} from "@context/ThemeProvider";

import dark from "./img/dark.svg";
import light from "./img/light.svg";
import neitral from "./img/neitral.svg";

const Header = () => {
  const [icon, setIcon] = useState();
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(light);
        break;

      case THEME_DARK:
        setIcon(dark);
        break;

      case THEME_NEITRAL:
        setIcon(neitral);
        break;

      default:
        setIcon(light);
        break;
    }
  }, [isTheme]);

  return (
    <div className={classes.header}>
      <img className={classes.icon} src={icon} alt="icon" />
      <ul className={classes.header__list}>
        <li className="header__text">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="header__text">
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li className="header__text">
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <Favourite />
    </div>
  );
};

export default Header;
