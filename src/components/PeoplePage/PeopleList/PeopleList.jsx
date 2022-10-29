import React from "react";
import classes from "./PeopleList.module.css";
const PeopleList = ({ people }) => {
  return (
    <ul className={classes.list__container}>
      {people &&
        people.map(({ id, name, img }) => (
          <li className={classes.list__item} key={id}>
            <a href="#">
              <img className={classes.list__photo} src={img} alt={name}></img>
              <p>{name}</p>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default PeopleList;
