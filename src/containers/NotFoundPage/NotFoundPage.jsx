import React from "react";
import { useLocation } from "react-router";

import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div className={classes.container}>
      <p>Sorry,page {location.pathname} not found </p>
      <p>
        Go to <a href="/">homePage</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
