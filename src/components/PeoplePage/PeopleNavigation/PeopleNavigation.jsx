import { PropTypes } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import UIButton from "@UI/UIButton";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  let handleChangeNext = () => getResource(nextPage);
  let handleChangePrev = () => getResource(prevPage);
  return (
    <div>
      <Link to={`?page=${counterPage - 1}`} style={{ marginRight: "20px" }}>
        <UIButton
          text="Previous"
          prevPage={prevPage}
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link to={`?page=${counterPage + 1}`}>
        <UIButton text="Next" disabled={!nextPage} onClick={handleChangeNext} />
      </Link>
    </div>
  );
};
PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};
export default PeopleNavigation;
