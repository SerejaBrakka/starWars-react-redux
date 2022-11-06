import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PropTypes } from "prop-types";

import { API_PLANETS } from "@constants/Api";
import { getPlanetImage } from "@services/getPlanetData";
import { getApiResource } from "@utils/network";
import PlanetInfoPage from "./PlanetInfoPage/PlanetInfoPage";
import withErrorApi from "@hoc-helpers/withErrorApi";
import UILoading from "@UI/UILoading/UILoading";

const PlanetPage = ({ setErrorApi }) => {
  const { id } = useParams();

  const [planetInfo, setPlanetInfo] = useState("");
  const [planetImg, setPlanetImg] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PLANETS}/${id}/`);
      const img = await getPlanetImage(+id + 1);

      if (res) {
        setPlanetImg(img);
        setPlanetInfo([res]);
        setErrorApi(false);
      } else setErrorApi(true);
    })();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {planetInfo ? (
        <PlanetInfoPage planetInfo={planetInfo} planetImg={planetImg} />
      ) : (
        <UILoading />
      )}
    </div>
  );
};

PlanetPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PlanetPage);
