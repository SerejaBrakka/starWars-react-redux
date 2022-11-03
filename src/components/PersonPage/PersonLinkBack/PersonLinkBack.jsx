import React from "react";
import { useNavigate } from "react-router";

import classes from "./PersonLinkBack.module.css";

import arrowBack from "@static/arrowBack.svg";
const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    navigate(-1);
    e.preventDefault();
  };
  return (
    <a href="#" onClick={handleGoBack} className={classes.link}>
      <img className={classes.link__img} src={arrowBack} alt="arrowBack" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
