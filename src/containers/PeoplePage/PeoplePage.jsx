import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { API_PEOPLE } from "@constants/Api";
import { getApiResource, changeHTTP } from "@utils/network";
import {
  getItemImage,
  getPeopleId,
  getPeoplePageId,
} from "@services/getPeopleData";
import UseQueryParams from "@hooks/UseQueryParams";
import UILoading from "@components/UI/UILoading/UILoading";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(null);

  let query = UseQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getItemImage(id);
        return {
          name,
          id,
          img,
        };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else setErrorApi(true);
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people ? <PeopleList people={people} /> : <UILoading />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
