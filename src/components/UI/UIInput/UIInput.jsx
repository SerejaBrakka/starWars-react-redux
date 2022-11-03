import React from "react";
import classes from "./UIInput.module.css";

const UIInput = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classes.input1}
    />
  );
};

export default UIInput;
