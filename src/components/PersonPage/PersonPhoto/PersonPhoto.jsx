import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import classes from "./PersonPhoto.module.css";

import favouriteTrue from "./img/favouriteTrue.svg";
import favouriteNone from "./img/favouriteNone.svg";

import {
  setPersonToFavourite,
  removePersonFromFavourite,
} from "@store/actions";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavourite,
  setPersonFavourite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavouritePeople = () => {
    if (personFavourite) {
      dispatch(removePersonFromFavourite(personId));
      setPersonFavourite(false);
    } else {
      dispatch(
        setPersonToFavourite({
          name: personName,
          img: personPhoto,
          id: personId,
        })
      );
      setPersonFavourite(true);
    }
  };
  return (
    <>
      <div className={classes.container}>
        <img className={classes.photo} src={personPhoto} alt={personName} />

        <img
          src={personFavourite ? favouriteTrue : favouriteNone}
          onClick={dispatchFavouritePeople}
          alt="favourites"
          className={classes.favorite}
        ></img>
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
