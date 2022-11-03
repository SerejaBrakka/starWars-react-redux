import React from "react";
import { PropTypes } from "prop-types";
import cn from "classnames";
import classes from "./UIButton.module.css";

const UIButton = ({ text, onClick, disabled, theme = "dark" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(classes.button, classes[theme])}
    >
      {text}
    </button>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UIButton;
