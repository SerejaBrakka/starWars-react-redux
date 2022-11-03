import React from "react";
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

export default SearchPageInfo;
