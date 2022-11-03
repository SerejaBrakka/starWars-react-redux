import { PropTypes } from "prop-types";
import { React, useEffect, useState } from "react";

import classes from "./PersonFilms.module.css";

import { makeConcurrentRequest } from "@utils/network";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms);
      setFilmsName(response);
    })();
  }, []);
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list__container}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => {
            return (
              <li className={classes.list__item} key={episode_id}>
                <span className={classes.item__episode}>
                  Episode: {episode_id}
                </span>
                :<span className={classes.item__title}> {title}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
