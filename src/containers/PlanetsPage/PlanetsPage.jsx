import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

import classes from "./PlanetsPage.module.css";

import UILoading from "@components/UI/UILoading/UILoading";
import { API_PLANETS } from "@constants/Api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId } from "@services/getPeopleData";
import { getPlanetImage } from "@services/getPlanetData";
import { setPlanetRedux } from "@store/actions";
import { getApiResource } from "@utils/network";

const PlanetsPage = ({ setErrorApi }) => {
  const [planet, setPlanet] = useState(null);

  const dispatch = useDispatch();
  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const planetList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPlanetImage(+id + 1);
        return {
          name,
          id,
          img,
        };
      });

      setPlanet(planetList);
      setErrorApi(false);
    } else setErrorApi(true);
  };

  useEffect(() => {
    getResource(API_PLANETS);
  }, []);

  useEffect(() => {
    dispatch(setPlanetRedux(planet));
  }, [planet]);

  return (
    <div>
      <ul className={classes.list__container}>
        {planet ? (
          planet.map(({ id, name, img }) => (
            <li className={classes.list__item} key={id}>
              <Link to={`/planet/${id}`} className={classes.list__link}>
                <img
                  className={`list__photo list__photo${id}`}
                  src={img}
                  alt={name}
                  style={{
                    animationDuration: `${id * 2 * (Math.random() * 15)}s`,
                  }}
                />
                <p className={classes.list__name}>{name}</p>
              </Link>
            </li>
          ))
        ) : (
          <UILoading />
        )}
      </ul>
    </div>
  );
};

PlanetsPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PlanetsPage);
