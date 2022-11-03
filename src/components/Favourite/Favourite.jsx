import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Favourite.module.css";

import favouriteLogo from "./img/favouriteLogo.svg";

const Favourite = () => {
  const [count, setCount] = useState(0);
  const favouritesData = useSelector(
    (state) => state.favouriteReducer.favourites
  );

  useEffect(() => {
    setCount(favouritesData.length);
  }, [favouritesData]);
  return (
    <div className={classes.container}>
      <Link to="favourites">
        <span className={classes.counter}>{count}</span>
        <img className={classes.icon} src={favouriteLogo} alt="favourites" />
      </Link>
    </div>
  );
};

export default Favourite;
