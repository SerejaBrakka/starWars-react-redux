import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul className={classes.header__list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
