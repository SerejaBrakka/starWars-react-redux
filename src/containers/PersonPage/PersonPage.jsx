import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import { API_PERSON } from "@constants/Api";
import { getItemImage } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";

import classes from "./PersonPage.module.css";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import PersonFilms from "@components/PersonPage/PersonFilms";
import UILoading from "@components/UI/UILoading/UILoading";

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavourite, setPersonFavourite] = useState(false);

  const { id } = useParams();
  const personData = useSelector((state) => state.favouriteReducer.favourites);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      personData?.filter((e) => e.id === id).length !== 0
        ? setPersonFavourite(true)
        : setPersonFavourite(false);

      if (res) {
        setErrorApi(false);
        setPersonInfo([
          { title: "height", data: res.height },
          { title: "mass", data: res.mass },
          { title: "height", data: res.height },
          { title: "gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonId(id);
        setPersonPhoto(getItemImage(id));
        setPersonFilms(res.films);
      } else setErrorApi(true);
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={classes.wrapper}>
        <span className={classes.person__name}>{personName}</span>
        <div className={classes.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            setPersonFavourite={setPersonFavourite}
            personFavourite={personFavourite}
          />

          {personInfo && (
            <PersonInfo personInfo={personInfo} personName={personName} />
          )}
          {personFilms ? (
            <PersonFilms personFilms={personFilms} />
          ) : (
            <UILoading />
          )}
        </div>
      </div>
    </>
  );
};
PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
