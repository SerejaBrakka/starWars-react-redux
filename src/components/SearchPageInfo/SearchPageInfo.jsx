import React from "react";
import PropTypes from "prop-types";

import PeopleList from "@components/PeoplePage/PeopleList";

const SearchPageInfo = ({ people }) => {
  return (
    <div>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h1 className="header__text">Персонаж не найден</h1>
      )}
    </div>
  );
};

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;
