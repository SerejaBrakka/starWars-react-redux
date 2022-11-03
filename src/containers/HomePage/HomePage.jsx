import React from "react";
import ChooseSide from "@components/HomePage/ChooseSide";

const HomePage = () => {
  return (
    <div>
      <h1 className="header__text" style={{ textAlign: "center" }}>
        Choose your side
      </h1>
      <ChooseSide />
    </div>
  );
};

export default HomePage;
