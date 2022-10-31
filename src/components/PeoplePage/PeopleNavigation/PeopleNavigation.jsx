import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  let handleChangeNext = () => getResource(nextPage);
  let handleChangePrev = () => getResource(prevPage);
  return (
    <div>
      <Link to={`?page=${counterPage - 1}`}>
        <button disabled={!prevPage} onClick={handleChangePrev}>
          Prev
        </button>
      </Link>
      <Link to={`?page=${counterPage + 1}`}>
        <button disabled={!nextPage} onClick={handleChangeNext}>
          Next
        </button>
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
