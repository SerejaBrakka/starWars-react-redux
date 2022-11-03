import React from "react";
import { useNavigate } from "react-router";
import arrowBack from "@static/arrowBack.svg";
import classes from "./PersonLinkBack.module.css";
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
