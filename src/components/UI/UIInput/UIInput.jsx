import React from "react";
import { PropTypes } from "prop-types";

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

UIInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default UIInput;
