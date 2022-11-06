import React from "react";

import classes from "./PlanetInfoPage.module.css";

import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import UILoading from "@UI/UILoading/UILoading";

const PlanetInfoPage = ({ planetInfo, planetImg }) => {
  return (
    <div>
      <PersonLinkBack />
      {planetInfo ? (
        planetInfo.map((planet) => (
          <div className={classes.wrapper} key={planet.name}>
            <div className={classes.wrapper__photo}>
              <img
                src={planetImg}
                alt="planetPhoto"
                className={classes.wrapper__photo_planet}
              />
            </div>
            <div className={classes.wrapper__info}>
              <h1>{planet.name}</h1>
              <p>Diameter: {planet.diameter}</p>
              <p>Population: {planet.population}</p>
              <p>Orbital_period: {planet.orbital_period}</p>
              <p>Climate: {planet.climate}</p>
            </div>
          </div>
        ))
      ) : (
        <UILoading />
      )}
    </div>
  );
};

export default PlanetInfoPage;
