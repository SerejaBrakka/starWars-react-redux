import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { API_PLANETS } from "@constants/Api";
import { getPlanetImage } from "@services/getPlanetData";
import { getApiResource } from "@utils/network";
import PlanetInfoPage from "./PlanetInfoPage/PlanetInfoPage";
import UILoading from "@UI/UILoading/UILoading";

const PlanetPage = () => {
  const { id } = useParams();

  const [planetInfo, setPlanetInfo] = useState([]);
  const [planetImg, setPlanetImg] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PLANETS}/${id}/`);
      const img = await getPlanetImage(+id + 1);
      setPlanetImg(img);
      setPlanetInfo([res]);
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

export default PlanetPage;
