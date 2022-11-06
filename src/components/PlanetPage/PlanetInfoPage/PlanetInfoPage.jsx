import React from "react";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";

import classes from "./PlanetInfoPage.module.css";

const PlanetInfoPage = ({ planetInfo, planetImg }) => {
  return (
    <div>
      <PersonLinkBack />
      {planetInfo.map((e) => (
        <div className={classes.wrapper} key={e.name}>
          <div className={classes.wrapper__photo}>
            <img
              src={planetImg}
              alt="planetPhoto"
              className={classes.wrapper__photo_planet}
            />
          </div>
          <div className={classes.wrapper__info}>
            <h1>{e.name}</h1>
            <p>Diameter: {e.diameter}</p>
            <p>Population: {e.population}</p>
            <p>Orbital_period: {e.orbital_period}</p>
            <p>Climate: {e.climate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanetInfoPage;
