import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./PeopleList.module.css";
import UILoading from "@UI/UILoading/UILoading";

const PeopleList = ({ people }) => {
  return (
    <ul className={classes.list__container}>
      {people ? (
        people.map(({ id, name, img }) => (
          <li className={classes.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={classes.list__photo} src={img} alt={name}></img>
              <p>{name}</p>
            </Link>
          </li>
        ))
      ) : (
        <UILoading />
      )}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
