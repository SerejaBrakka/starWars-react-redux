import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import classes from "./FavouritePage.module.css";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";

import video from "./img/video.mp4";

const FavouritePage = () => {
  const [people, setPeople] = useState([]);
  let storeData = useSelector((state) => state.favouriteReducer.favourites);

  useEffect(() => {
    let res = storeData.map((user) => {
      return {
        name: user.name,
        id: user.id,
        img: user.img,
      };
    });
    setPeople(res);
  }, []);
  return (
    <div>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <div className={classes.container}>
          <h1>
            Возможно, вы не являетесь фанатом серии Star Wars,
            <br /> так как не добавили в избранные ни одного персонажа
          </h1>
          <video
            muted
            loop
            autoPlay
            className={classes.noFavourites}
            src={video}
            alt="no-favourites"
          />
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
