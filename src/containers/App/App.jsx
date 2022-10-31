import React from "react";

import { Route, Routes } from "react-router-dom";

import classes from "./App.module.css";
import Header from "@components/Header/Header";
import routesConfig from "@routes/routesConfig";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
