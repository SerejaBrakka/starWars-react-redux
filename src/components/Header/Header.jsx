import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Favourite from "../Favourite";

import classes from "./Header.module.css";

import {
  useTheme,
  THEME_LIGHT,
  THEME_NEITRAL,
  THEME_DARK,
} from "@context/ThemeProvider";

import light from "./img/light.svg";
import dark from "./img/dark.svg";
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
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <Favourite />
    </div>
  );
};

export default Header;
