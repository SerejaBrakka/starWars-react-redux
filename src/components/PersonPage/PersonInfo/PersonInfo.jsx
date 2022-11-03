import PropTypes from "prop-types";
import React from "react";

import classes from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list__container}>
        {personInfo &&
          personInfo.map(
            ({ title, data }, index) =>
              data && (
                <li key={index} className={classes.list__item}>
                  <span className={classes.item__title}>
                    {title}: {data}
                  </span>
                </li>
              )
          )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
