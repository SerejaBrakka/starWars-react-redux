import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { API_PERSON_SEARCH } from "@constants/Api";
import { getApiResource } from "@utils/network";
import { getItemImage, getPeopleId } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPageInfo";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import UIInput from "@components/UI/UIInput/UIInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_PERSON_SEARCH + param);

    if (res) {
      let peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getItemImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResponse(" ");
  }, []);
  const handleInputChange = (event) => {
    let value = event.target.value;
    setInputSearchValue(value);
    getResponse(value);
  };
  return (
    <div>
      <h1 className="header__text">Search</h1>
      <UIInput
        type={"text"}
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder={"Input characters name"}
      />
      <SearchPageInfo people={people} />
    </div>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
