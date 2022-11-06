import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import classes from "./PlanetsPage.module.css";
import cn from "classnames";

import { API_PLANETS } from "@constants/Api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";
import UILoading from "@components/UI/UILoading/UILoading";
import { getPlanetImage } from "@services/getPlanetData";
import { setPlanetRedux } from "@store/actions";

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
                <div className={classes.container__img}>
                  <img
                    className={`list__photo list__photo${id}`}
                    src={img}
                    alt={name}
                    style={{
                      animationDuration: `${id * 2 * (Math.random() * 10)}s`,
                    }}
                  ></img>
                </div>
                <div className={classes.container__name}>
                  <p className={classes.list__name}>{name}</p>
                </div>
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
